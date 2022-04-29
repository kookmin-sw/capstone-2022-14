import requests
from bs4 import BeautifulSoup
import urllib.request
import os


class DaangnItem:
    def __init__(self):
        self.market = "Daangn"
        self.url = ""
        self.pid = ""
        self.keyword = ""
        self.title = ""
        self.desc = ""
        self.price = ""
        self.date = ""
        self.pictures = []
        self.views = 0
        self.region = ""


class DaangnCrawler:
    def crawl_data(self, keyword, pages):
        items = []
        for page in range(1, pages + 1):
            url = f"https://www.daangn.com/search/{keyword}/more/flea_market?page={page}"
            res = requests.get(url)
            items += self.data_process(res.text, keyword)

        return items

    def data_process(self, html, keyword):
        path = "./image/daangn_image/"

        if not os.path.exists(path):
            os.makedirs(path)

        bs = BeautifulSoup(html, "lxml")
        articles = bs.find_all("article")

        items = []
        for article in articles:
            item = DaangnItem()
            item.keyword = keyword

            item.pid = article.find("a", "flea-market-article-link")["href"].split("/articles/")[1]
            # print(item.pid)
            item.title = article.find("span", "article-title").text
            item.desc = article.find("span", "article-content").text
            item.price = article.find("p", "article-price").text

            url = article.find("img")["src"].split("?q")[0]
            item.pictures = [f"{item.pid}.jpg"]
            urllib.request.urlretrieve(url, f"image/daangn_image/{item.pid}.jpg")

            items.append(item)

        return items
