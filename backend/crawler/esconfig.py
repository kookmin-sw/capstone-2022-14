from elasticsearch import Elasticsearch

index_name = "products"

body = {
    "settings": {
        "index": {
            "analysis": {
                "tokenizer": {
                    "nori_tokenizer": {
                        "type": "nori_tokenizer",
                    },
                },
                "analyzer": {
                    # nori 분석기 설정
                    "nori_korean": {"type": "custom", "tokenizer": "nori_tokenizer"},
                },
            }
        }
    },
    "mappings": {
        "properties": {
            "keyword": {
                "type": "text",
                # name에 nori 형태소 분석기 설정
                "analyzer": "nori_korean",
            },
            "title": {
                "type": "text",
                # name에 nori 형태소 분석기 설정
                "analyzer": "nori_korean",
            },
            "desc": {
                "type": "text",
                "analyzer": "nori_korean",
            },
            "price": {"type": "integer"},
            "images": {"type": "keyword", "fields": {"type": "keyword"}},
        }
    },
}
