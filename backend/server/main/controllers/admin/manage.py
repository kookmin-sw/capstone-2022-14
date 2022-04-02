from flask import request
from flask_apispec import doc, use_kwargs
from server.main.controllers.admin import (
    API_CATEGORY,
    admin_bp,
)
from server.utils.common import response_json_with_code
from server.main import create_app
from elasticsearch import Elasticsearch

app = create_app()


@admin_bp.route("/manage/clean", methods=["DELETE"])
@doc(tags=[API_CATEGORY], summary="ES에 저장된 데이터 모두 삭제", description="ES에 저장된 데이터 모두 삭제")
def clean():
    # 일레스틱서치 IP주소와 포트(기본:9200)로 연결한다
    es = Elasticsearch("http://elasticsearch:9200/")  # 환경에 맞게 바꿀 것
    es.info()

    # 인덱스 지정
    index_name = "products"

    # 삭제
    es.indices.delete(index=index_name)

    return True
