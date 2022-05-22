from flask import Blueprint

hot_bp = Blueprint("hot", __name__, url_prefix="/api/hot")

API_CATEGORY = "Hot"

from server.main.controllers.hot.hot import *
