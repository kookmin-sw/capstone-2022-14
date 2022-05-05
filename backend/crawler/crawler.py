from daangn import DaangnCrawler
from bunjang import BunjangCrawler

import json
from elasticsearch import Elasticsearch


class Crawler:
    def __init__(self):
        self.crawlers = []

    def add_crawler(self, crawler):
        self.crawlers.append(crawler)

    def crawl(self, keyword, pages):
        data = []
        for crawler in self.crawlers:
            data += crawler.crawl_data(keyword, pages)
        return data


if __name__ == "__main__":
    daangn = DaangnCrawler()
    bunjang = BunjangCrawler()
    crawler = Crawler()

    crawler.add_crawler(daangn)
    crawler.add_crawler(bunjang)

    crawl_keyword = "맥북"

    testdata = crawler.crawl(crawl_keyword, 2)
    jsondata = map(lambda data: data.__dict__, testdata)

    # 엘라스틱 서치 IP주소와 포트(기본:9200)로 연결한다
    es = Elasticsearch("http://127.0.0.1:9200/")  # 환경에 맞게 바꿀 것

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

    index_name = "products"

    try:
        es.indices.create(index=index_name, body=body)
    except:
        pass

    for data in jsondata:
        # insert data to db using json.dumps
        # print(json.dumps(data, ensure_ascii=False))
        es.index(index=index_name, body=data)

    es.indices.refresh(index=index_name)
