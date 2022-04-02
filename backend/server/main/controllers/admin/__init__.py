from flask import Blueprint

admin_bp = Blueprint("admin", __name__, url_prefix="/api/admin")

API_CATEGORY = "Admin"

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

from server.main.controllers.admin.manage import *
