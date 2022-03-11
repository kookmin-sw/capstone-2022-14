import os
from flask import (
    Blueprint,
    current_app,
)
from flask_apispec import doc, use_kwargs
from server.main.schema import (
    RequestFileSchema
)

API_CATEGORY = "Test"
test_bp = Blueprint("test", __name__, url_prefix="/test")
app = current_app
path = os.path.abspath(app.config["FILE_PATH"])
port = app.config["PORT"]
host = app.config["HOST"]
base_dir = os.getcwd()


# 테스트용 API들.
@test_bp.route("/", methods=["GET"])
@doc(
    tags=[API_CATEGORY],
    summary="Hello!",
    description="Hello World Test"
)
def index():
  return "Hello World!"


@test_bp.route("/<path:parameter>", methods=["GET"])
@doc(
    tags=[API_CATEGORY],
    summary="World!",
    description="Hello World Test"
)
def world(parameter):
  return parameter + " World!"


@test_bp.route("/upload", methods=["POST"])
@doc(
    tags=[API_CATEGORY],
    summary="Upload",
    description="File upload test",
    consumes=["multipart/form-data"]
)
@use_kwargs(RequestFileSchema, location="files")
def upload(file):
  full_path = os.path.join(path, file.filename)
  file.save(full_path)
  return "success"