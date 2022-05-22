from flask import Blueprint

admin_bp = Blueprint("admin", __name__, url_prefix="/api/admin")

API_CATEGORY = "Admin"

from server.main.controllers.admin.manage import *
