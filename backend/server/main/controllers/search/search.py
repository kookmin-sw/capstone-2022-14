from flask import request
from flask_apispec import doc, use_kwargs
from server.main.controllers.search import (
    API_CATEGORY,
    search_bp,
)
from server.utils.common import response_json_with_code
from server.main import create_app
from elasticsearch import Elasticsearch

app = create_app()


@search_bp.route("/<path:query>", methods=["GET"])
@doc(tags=[API_CATEGORY], summary="ES에 저장된 데이터 검색", description="검색할 키워드를 parameter로 받아 ES에서 검색")
def result(query):
    # 일레스틱서치 IP주소와 포트(기본:9200)로 연결한다
    es = Elasticsearch("http://elasticsearch:9200/")  # 환경에 맞게 바꿀 것
    es.info()

    # 인덱스 지정
    index_name = "products"

    search_query = {"from": 0, "size": 10, "query": {"match": {"product_name": query}}}

    # 키워드 검색
    results = es.search(index=index_name, body=search_query)
    # for result in results["hits"]["hits"]:
    #     print("score:", result["_score"], "source:", result["_source"])

    return results["hits"]["hits"]
