from urllib import response
import requests
from bs4 import BeautifulSoup
import urllib.request
import os
import datetime
import re
import io
from PIL import Image


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

            page_items = self.__get_article_items(res.text)
            for item in page_items:
                item.keyword = keyword
                self.data_process(item, keyword)
                # print(item.__dict__)

            items += page_items

        return items

    def data_process(self, item, keyword):
        path = "./image/daangn_image/"

        if not os.path.exists(path):
            os.makedirs(path)

        res = requests.get(f"https://www.daangn.com/articles/{item.pid}")
        bs = BeautifulSoup(res.text, "lxml")

        article = bs.select_one("article")
        item.views = int(article.find("p", id="article-counts").text.strip().split()[7])
        item.images = self.__get_image(article.find("div", "slider"), item.pid)

        dates = article.find("time").text.strip().split()
        if len(dates) == 3:
            date = dates[1]
        else:
            date = dates[0]

        item.date = self.__parse_date(date)

    def __get_article_items(self, html):
        bs = BeautifulSoup(html, "lxml")
        articles = bs.find_all("article")

        items = []
        for article in articles:
            item = DaangnItem()
            item.pid = article.find("a", "flea-market-article-link")["href"].split("/articles/")[1]
            item.title = article.find("span", "article-title").text
            item.desc = article.find("span", "article-content").text
            item.price = self.__parse_price(article.find("p", "article-price").text)
            items.append(item)

        return items

    def __parse_price(self, price_text):
        return int(price_text.strip().replace("원", "").replace(",", ""))

    def __get_image(self, image_html, pid):
        path = "./image/daangn_image/"

        if not os.path.exists(path):
            os.makedirs(path)

        image_htmls = image_html.select("img")
        idx = 1
        images = []
        for image_tag in image_htmls:
            # convert image to jpg and save image
            img_io = urllib.request.urlopen(image_tag["data-lazy"]).read()
            img_stream = io.BytesIO(img_io)
            img = Image.open(img_stream)
            img.save(f"image/daangn_image/{pid}_{idx}.jpg", "jpeg")
            images.append(f"{pid}_{idx}.jpg")
            idx += 1
        return images

    def __parse_date(self, date_text):
        pattern = re.compile("(\d{1,3})([가-힣]{1,3})")
        num, period = pattern.match(date_text).groups()

        num = int(num)

        now = datetime.datetime.now()

        if period == "초":
            date = now - datetime.timedelta(seconds=num)
        elif period == "분":
            date = now - datetime.timedelta(minutes=num)
        elif period == "시간":
            date = now - datetime.timedelta(hours=num)
        elif period == "일":
            date = now - datetime.timedelta(days=num)
        elif period == "개월":
            date = now - datetime.timedelta(days=num * 30)
        else:
            date = now

        return int(date.timestamp())
