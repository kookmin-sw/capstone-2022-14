import os
from flask import Flask
from apispec import APISpec
from apispec.ext.marshmallow import MarshmallowPlugin
from flask_apispec.extension import FlaskApiSpec

base_dir = os.getcwd()
config_dir = os.path.abspath(os.path.join(base_dir, "server", "main", "server.cfg"))
# docs = FlaskApiSpec()


def create_app(config_filename=config_dir):
    app = Flask(__name__)
    app.config.from_pyfile(config_filename)
    app.config["JSON_AS_ASCII"] = False
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
    app.static_folder = os.path.abspath(app.config["FILE_PATH"])
    docs = FlaskApiSpec(app)

    with app.app_context():
        from server.main.controllers.test import test_bp

        app.register_blueprint(test_bp)
        docs.register_existing_resources()

        # 스웨거에서 options 제거
        for key, value in docs.spec._paths.items():
            docs.spec._paths[key] = {
                inner_key: inner_value for inner_key, inner_value in value.items() if inner_key != "options"
            }

    return app


app = create_app()