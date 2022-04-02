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

    testdata = crawler.crawl("맥북", 2)
    jsondata = map(lambda data: data.__dict__, testdata)

    for data in jsondata:
        # insert data to db using json.dumps
        print(data)
