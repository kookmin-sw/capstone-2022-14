from flask import Blueprint

search_bp = Blueprint("search", __name__, url_prefix="/api/search")

API_CATEGORY = "Search"

from server.main.controllers.search.search import *
