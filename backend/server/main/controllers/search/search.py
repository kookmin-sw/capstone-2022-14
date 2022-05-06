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

products = {
    "AirPods 1Gen": "에어팟 1세대",
    "AirPods 2Gen": "에어팟 2세대",
    "AirPods 3Gen": "에어팟 3세대",
    "AirPods Pro": "에어팟 프로",
    "AirPods Max": "에어팟 맥스",
    "Series 1": "애플워치1",
    "Series 2": "애플워치2",
    "Series 3": "애플워치3",
    "Series 4": "애플워치4",
    "Series 5": "애플워치5",
    "Series 6": "애플워치6",
    "Series 7": "애플워치7",
    "SE": "애플워치SE",
    "iPad": "아이패드",
    "iPad Air": "아이패드 에어",
    "iPad mini": "아이패드 미니",
    "iPad Pro": "아이패드 프로",
    "iPad Pro(12.9)": "아이패드 프로 12.9인치",
    "iPhone 6": "아이폰 6",
    "iPhone 6+": "아이폰 6+",
    "iPhone 6s": "아이폰 6s",
    "iPhone 6s+": "아이폰 6s+",
    "iPhone 7": "아이폰 7",
    "iPhone 7+": "아이폰 7+",
    "iPhone 8": "아이폰 8",
    "iPhone 8+": "아이폰 8+",
    "iPhone X": "아이폰 X",
    "iPhone XR": "아이폰 XR",
    "iPhone Xs": "아이폰 Xs",
    "iPhone Xs Max": "아이폰 Xs Max",
    "iPhone 11": "아이폰 11",
    "iPhone 11 Pro": "아이폰 11 Pro",
    "iPhone 11 Pro Max": "아이폰 11 Pro Max",
    "iPhone 12 mini": "아이폰 12 미니",
    "iPhone 12": "아이폰 12",
    "iPhone 12 Pro": "아이폰 12 Pro",
    "iPhone 12 Pro Max": "아이폰 12 Pro Max",
    "iPhone 13 mini": "아이폰 13 미니",
    "iPhone 13": "아이폰 13",
    "iPhone 13 Pro": "아이폰 13 Pro",
    "iPhone 13 Pro Max": "아이폰 13 Pro Max",
    "iPhone SE": "아이폰 SE",
    "iPhone SE Gen2": "아이폰 SE 2세대",
    "iPhone SE Gen3": "아이폰 SE 3세대",
    "Mac mini": "맥 미니",
    "Mac Studio": "맥 스튜디오",
    "Mac Pro": "맥 프로",
    "iMac": "아이맥",
    "MacBook Air": "맥북 에어",
    "MacBook Pro": "맥북 프로",
}


@search_bp.route("/<path:query>", methods=["GET"])
@doc(tags=[API_CATEGORY], summary="ES에 저장된 데이터 검색", description="검색할 키워드를 parameter로 받아 ES에서 검색")
def result(query):
    # 일레스틱서치 IP주소와 포트(기본:9200)로 연결한다
    es = Elasticsearch("http://elasticsearch:9200/")  # 환경에 맞게 바꿀 것
    es.info()

    # 인덱스 지정
    index_name = "products"

    search_query = {
        "from": 0,
        "size": 100,
        "query": {"multi_match": {"query": products[query], "fields": ["title", "desc", "keyword"]}},
    }

    total_price = 0
    minimum_price = 9999999999

    # 키워드 검색
    results = es.search(index=index_name, body=search_query)
    for result in results["hits"]["hits"]:
        price = result["_source"]["price"]
        total_price += price
        minimum_price = min(price, minimum_price)
        # print("score:", result["_score"], "source:", result["_source"])

    average_price = total_price // len(results["hits"]["hits"])

    return {"result": results["hits"]["hits"], "avg_price": average_price, "min_price": minimum_price}
