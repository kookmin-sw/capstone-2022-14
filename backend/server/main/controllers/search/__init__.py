from flask import Blueprint

search_bp = Blueprint("search", __name__, url_prefix="/api/search")

API_CATEGORY = "Search"

# authorization_header = {
#     "Authorization": {
#         "description":
#         "Autorization HTTP header with JWT access token,\
#         like: Autorization: Bearer header.payload.signature",
#         "in":
#         "header",
#         "type":
#         "string",
#         "required":
#         True
#     }
# }

from server.main.controllers.search.search import *
