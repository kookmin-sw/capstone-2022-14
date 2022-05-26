from flask import Blueprint

noti_bp = Blueprint("notification", __name__, url_prefix="/api/notification")

API_CATEGORY = "Notification"

from server.main.controllers.notification.notification import *
