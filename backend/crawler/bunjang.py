import requests


class BunjangItem:
    def __init__(self):
        self.market = "Bunjang"
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


class BunjangCrawler:
    def crawl_data(self, keyword, pages):
        items = []
        for page in range(pages):
            url = f"https://api.bunjang.co.kr/api/1/find_v2.json?order=date&page={page}&n=10&req_ref=search&q={keyword}&stat_category_required=1&version=4"
            res = requests.get(url)
            pids = [data["pid"] for data in res.json()["list"]]

            for pid in pids:
                res = requests.get(f"https://api.bunjang.co.kr/api/1/product/{pid}/detail_info.json?version=4")
                item_info = res.json()["item_info"]
                items.append(self.data_process(item_info, keyword))
                break

        return items

    def data_process(self, item_info, keyword):
        item = BunjangItem()
        item.keyword = keyword

        item.title = item_info["name"]
        item.desc = item_info["description"] + item_info["description_for_detail"]
        item.price = item_info["price"]

        print(item.__dict__)

        return item


a = BunjangCrawler()
b = a.crawl_data("맥북", 2)
print(b)
