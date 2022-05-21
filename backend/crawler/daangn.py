from itembase import ItemBase
from bs4 import BeautifulSoup
from PIL import Image
import json
import requests
import urllib.request
import os
import datetime
import re
import io


class DaangnItem(ItemBase):
    def __init__(self):
        super().__init__()
        self.market = "Daangn"


class DaangnCrawler:
    def __init__(self):
        with open("kakao_api.json", "r") as f:
            json_data = json.load(f)
            self.api_key = json_data["rest_api_key"]

    def crawl_data(self, keyword, pages):
        items = []
        for page in range(1, pages + 1):
            url = f"https://www.daangn.com/search/{keyword}/more/flea_market?page={page}"
            res = requests.get(url)

            page_items = self.__get_article_items(res.text)
            for item in page_items:
                item.keyword = keyword
                try:
                    self.data_process(item, keyword)
                except:
                    continue

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

        item.region = article.find("div", id="region-name").text
        item.latitude, item.longitude = self.__get_geolocation(item.region)

    def __get_article_items(self, html):
        bs = BeautifulSoup(html, "lxml")
        articles = bs.find_all("article")

        items = []
        for article in articles:
            item = DaangnItem()
            item.pid = article.find("a", "flea-market-article-link")["href"].split("/articles/")[1]
            item.title = article.find("span", "article-title").text
            item.desc = article.find("span", "article-content").text
            try:
                item.price = self.__parse_price(article.find("p", "article-price").text)
            except:
                continue
            items.append(item)

        return items

    def __parse_price(self, price_text):
        return int(price_text.strip().replace("만", "0000").replace("원", "").replace(",", ""))

    def __get_image(self, image_html, pid):
        path = "./image/daangn_image/"

        if not os.path.exists(path):
            os.makedirs(path)

        image_htmls = image_html.select("img")
        idx = 1
        images = []
        for image_tag in image_htmls:
            try:
                # convert image to jpg and save image
                img_io = urllib.request.urlopen(image_tag["data-lazy"]).read()
                img_stream = io.BytesIO(img_io)
                img = Image.open(img_stream)
                img.save(f"image/daangn_image/{pid}_{idx}.jpg", "jpeg")
                images.append(f"{pid}_{idx}.jpg")
                idx += 1
            except:
                pass
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

    def __get_geolocation(self, region):
        headers = {"Authorization": f"KakaoAK {self.api_key}"}
        url = f"https://dapi.kakao.com/v2/local/search/address.json?query={region}"
        response = requests.get(url, headers=headers).json()

        try:
            latitude = response["documents"][0]["y"]
            longitude = response["documents"][0]["x"]
        except:
            latitude = ""
            longitude = ""

        return (latitude, longitude)
