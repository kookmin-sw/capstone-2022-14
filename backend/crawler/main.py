from daangn import DaangnCrawler
from bunjang import BunjangCrawler
from crawler import Crawler

import sys, os, json

sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from db.esstore import EsStore


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
    es_client = EsStore("http://127.0.0.1:9200/")

    # define crawlers
    daangn = DaangnCrawler()
    bunjang = BunjangCrawler()
    crawler = Crawler()

    crawler.add_crawler(daangn)
    crawler.add_crawler(bunjang)

    # get crawling keywords
    crawl_keywords = get_keywords()
    crawl_pages = 1  # TODO

    isFirst = False
    if not os.path.isfile("keywords_count.json"):
        tmp = {"맥북": 0, "아이폰": 0, "아이패드": 0, "에어팟": 0, "애플워치": 0}
        with open("keywords_count.json", "w", encoding="utf-8") as f:
            json.dump(tmp, f, indent="\t", ensure_ascii=False)
        isFirst = True

    # get crawling data and insert
    for keyword in crawl_keywords:
        print(f"{keyword} 크롤링 중..")
        crawl_data = crawler.crawl(keyword, crawl_pages)
        # crawl_data_json = map(lambda data: data.__dict__, crawl_data)
        for data in crawl_data:
            es_client.insert(data.__dict__, f"{data.market}_{data.pid}")

        # price notification
        with open("keywords_count.json", "r", encoding="utf-8") as f:
            data = json.load(f)

        if es_client.count(keyword)["count"] > data[keyword] and not isFirst:
            c = es_client.count(keyword)["count"] - data[keyword]

            for i in range(c):
                if crawl_data[i].price <= 150000:
                    print(f"{keyword} {crawl_data[i].price}원 알림 전송")

        data[keyword] = es_client.count(keyword)["count"]

        with open("keywords_count.json", "w", encoding="utf-8") as f:
            json.dump(data, f, indent="\t", ensure_ascii=False)

    es_client.refresh()
