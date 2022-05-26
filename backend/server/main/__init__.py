import os
from flask import Flask
from apispec import APISpec
from apispec.ext.marshmallow import MarshmallowPlugin
from flask_apispec.extension import FlaskApiSpec
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
migrate = Migrate()

base_dir = os.getcwd()
config_dir = os.path.abspath(os.path.join(base_dir, "server", "main", "server.cfg"))


def create_app(config_filename=config_dir):
    app = Flask(__name__)
    app.config.from_pyfile(config_filename)
    app.config["JSON_AS_ASCII"] = False
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JSON_SORT_KEYS"] = False
    app.config.update(
        {
            "APISPEC_SPEC": APISpec(
                title="CRUD api",
                version="v1",
                openapi_version="2.0.0",
                plugins=[MarshmallowPlugin()],
            ),
            "APISPEC_SWAGGER_URL": "/docs.json",
            "APISPEC_SWAGGER_UI_URL": "/docs/",
        }
    )
    app.static_folder = os.path.abspath(app.config["IMAGE_FILE_PATH"])
    docs = FlaskApiSpec(app)

    with app.app_context():
        from server.main.controllers.admin import admin_bp
        from server.main.controllers.search import search_bp
        from server.main.controllers.img import image_bp
        from server.main.controllers.hot import hot_bp
        from server.main.controllers.notification import noti_bp

        app.register_blueprint(search_bp)
        app.register_blueprint(admin_bp)
        app.register_blueprint(image_bp)
        app.register_blueprint(hot_bp)
        app.register_blueprint(noti_bp)
        docs.register_existing_resources()

        # 스웨거에서 options 제거
        for key, value in docs.spec._paths.items():
            docs.spec._paths[key] = {
                inner_key: inner_value for inner_key, inner_value in value.items() if inner_key != "options"
            }

        from server.main.models import hot_products

        db.init_app(app)
        migrate.init_app(app, db)

    return app


app = create_app()
