import requests


def get_dangn(keyword, pages):
    for page in range(1, pages + 1):
        url = f"https://www.daangn.com/search/{keyword}/more/flea_market?page={page}"
        res = requests.get(url)
        print(res.text)


# get_dangn("맥북", 3)
