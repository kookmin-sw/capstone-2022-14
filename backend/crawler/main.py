from daangn import DaangnCrawler
from bunjang import BunjangCrawler
from crawler import Crawler

import sys, os

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

    # get crawling data and insert
    for keyword in crawl_keywords:
        print(f"{keyword} 크롤링 중..")
        crawl_data = crawler.crawl(keyword, crawl_pages)
        crawl_data_json = map(lambda data: data.__dict__, crawl_data)
        for data in crawl_data_json:
            es_client.insert(data)
    es_client.refresh()
