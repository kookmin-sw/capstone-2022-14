from daangn import DaangnCrawler
from bunjang import BunjangCrawler
from crawler import Crawler

import sys, os, datetime

sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from db.esstore import EsStore

from server.main.models.notification import Notification


def get_keywords(file_name="keywords.txt"):
    path = sys.path[0]
    crawl_keywords = []
    with open(f"{path}/{file_name}", "r") as f:
        while True:
            line = f.readline().strip()

            if len(line) > 0:
                crawl_keywords.append(line)

            if not line:
                break

    return crawl_keywords


if __name__ == "__main__":
    # connect to elasticsearch
    host = "http://127.0.0.1:9200/"

    try:
        es_client = EsStore(host)
    except:
        print(f"{host} 서버가 응답하지 않습니다")
        print("서버 상태 확인 후 다시 실행해 주세요 ")
        sys.exit(0)

    # define crawlers
    daangn = DaangnCrawler()
    bunjang = BunjangCrawler()
    crawler = Crawler()

    crawler.add_crawler(daangn)
    crawler.add_crawler(bunjang)

    # get crawling keywords
    crawl_keywords = get_keywords()
    crawl_pages = 3  # TODO
    if len(sys.argv) > 1:
        crawl_pages = int(sys.argv[1])

    # get crawling data and insert
    for keyword in crawl_keywords:
        print(f"{keyword} 크롤링 중..")
        crawl_data = crawler.crawl(keyword, crawl_pages)
        # crawl_data_json = map(lambda data: data.__dict__, crawl_data)
        for data in crawl_data:
            es_client.insert(data.__dict__, f"{data.market}_{data.pid}")

    es_client.refresh()

    filter_keywords = ["케이스", "매입", "삽니다", "업체", "교환", "강화유리", "교신"]
    MINIMUM_PRICE = 50000

    now = datetime.datetime.now()
    before_40minutes = now - datetime.timedelta(minutes=40) # 크롤링 하는 시간이 있으니 여유를 두고 40분

    notifications = Notification.getNotification()

    for notification in notifications:
        search_query = {
            "from": 0,
            "size": 100,
            "sort": [{"date": "desc"}],
            "query": {
                "bool": {
                    "must": {
                        "multi_match": {"query": notification.product, "fields": ["title", "desc", "keyword"]}
                    },
                    "must_not": list(
                        map(
                            lambda keyword: {
                                "multi_match": {"query": keyword, "fields": ["title", "desc", "keyword"]}
                            },
                            filter_keywords,
                        )
                    ),
                    "filter": [
                        {
                            "range": {
                                "date": {"gte": int(before_40minutes.timestamp()), "lt": int(now.timestamp())}
                            }
                        },
                        {"range": {"price": {"gte": MINIMUM_PRICE, "lte": notification.price}}},
                    ],
                }
            },
        }

        results = es_client.search(search_query)

        if len(results["hits"]["hits"]) == 0:
            continue

        # 최근 40분 내에 해당 키워드에 대한 사용자의 지정가에 맞는 상품이 있다면
        # 이메일 전송
        print(notification.email)
