import os
from flask import current_app, send_from_directory
from flask_apispec import doc
from server.main.controllers.img import (
    API_CATEGORY,
    image_bp,
)

app = current_app
image_file_path = os.path.abspath(app.config["IMAGE_FILE_PATH"])


@image_bp.route("/<path:path>", methods=["GET"])
@doc(tags=[API_CATEGORY], summary="donwload", description="image download")
def donwload(path):
    path_list = path.split("/")
    image_path = ""
    image_file = path_list[-1]

    for i in range(len(path_list) - 1):
        image_path += "/" + path_list[i]

    abspath = image_file_path

    return send_from_directory(abspath + image_path, image_file)
