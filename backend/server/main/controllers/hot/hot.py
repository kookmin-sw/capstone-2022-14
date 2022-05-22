from flask_apispec import doc
from server.main.controllers.hot import (
    API_CATEGORY,
    hot_bp,
)
from server.main.models.hot_products import HotProducts
from server.main import create_app

app = create_app()


@hot_bp.route("/<path:count>", methods=["GET"])
@doc(tags=[API_CATEGORY], summary="인기 매물 count만큼 리턴", description="인기 매물 count만큼 리턴")
def best(count):
    return HotProducts.getHotProducts(count)
