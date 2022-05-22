from flask_apispec import doc
from server.main.controllers.hot import (
    API_CATEGORY,
    hot_bp,
)
from server.utils.common import response_json_with_code
from server.main import create_app
from elasticsearch import Elasticsearch

app = create_app()


@hot_bp.route("/<path:count>", methods=["GET"])
@doc(tags=[API_CATEGORY], summary="인기 매물 count만큼 리턴", description="인기 매물 count만큼 리턴")
def best():
    # 일레스틱서치 IP주소와 포트(기본:9200)로 연결한다
    es = Elasticsearch("http://elasticsearch:9200/")  # 환경에 맞게 바꿀 것
    es.info()

    # 인덱스 지정
    index_name = "products"

    # 삭제
    es.indices.delete(index=index_name)

    return True
