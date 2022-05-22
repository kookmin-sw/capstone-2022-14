from flask import Blueprint

image_bp = Blueprint("image", __name__, url_prefix="/api/image")

API_CATEGORY = "Image"

from server.main.controllers.img.image import *
