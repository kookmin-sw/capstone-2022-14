import requests

class Crawl_bunjang:
    def __init__(self, keyword):
        # https://api.bunjang.co.kr/api/1/find_v2.json?q=%{keyword}&order=score&page=0&request_id=2022313150944&stat_device=w&n=100&stat_category_required=1&req_ref=search&version=4
        self.list_url = ("https://api.bunjang.co.kr/api/1/find_v2.json?"
                    f"q={keyword}&"
                    "order=score&"
                    "page=0&"
                    # "request_id=2022313150944&"
                    # "stat_device=w&"
                    "n=100&"
                    "stat_category_required=1&"
                    "req_ref=search&"
                    "version=4")
        self.detail_url = "https://api.bunjang.co.kr/api/1/product/{}/detail_info.json?version=4"

        # https://api.bunjang.co.kr/api/1/product/181883172/detail_info.json?version=4

    def data_process(self):
        res = requests.get(self.list_url)
        pids = [data['pid'] for data in res.json()['list']]
        for pid in pids:
          res = requests.get(self.detail_url.format(pid))
          
          # item_info(타이틀, 설명, 제품 사진 등)에서 필요한 데이터만 뽑아내야함
          item_info = res.json()['item_info']
        

