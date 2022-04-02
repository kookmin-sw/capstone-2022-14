import sys, time

from selenium import webdriver
from elasticsearch import Elasticsearch


search_keyword = sys.argv[1]

# Print iterations progress
def printProgressBar(iteration, total, prefix="", suffix="", decimals=1, length=100, fill="█", printEnd="\r"):
    """
    Call in a loop to create terminal progress bar
    @params:
        iteration   - Required  : current iteration (Int)
        total       - Required  : total iterations (Int)
        prefix      - Optional  : prefix string (Str)
        suffix      - Optional  : suffix string (Str)
        decimals    - Optional  : positive number of decimals in percent complete (Int)
        length      - Optional  : character length of bar (Int)
        fill        - Optional  : bar fill character (Str)
        printEnd    - Optional  : end character (e.g. "\r", "\r\n") (Str)
    """
    percent = ("{0:." + str(decimals) + "f}").format(100 * (iteration / float(total)))
    filledLength = int(length * iteration // total)
    bar = fill * filledLength + "-" * (length - filledLength)
    print(f"\r{prefix} |{bar}| {percent}% {suffix}", end=printEnd)
    # Print New Line on Complete
    if iteration == total:
        print()


def joongonara(keyword, index_name):
    # n일 이내 상품
    date_filter = 7

    url = "https://m.joongna.com/search-list/product?searchword={}&dateFilter={}".format(keyword, date_filter)

    options = webdriver.ChromeOptions()
    options.add_argument("headless")
    driver = webdriver.Chrome("./driver/chromedriver", options=options)
    driver.get(url)
    driver.implicitly_wait(300)

    count = int(
        driver.find_element_by_xpath('//*[@id="root"]/div[1]/section/div[2]/div[1]/div/p')
        .text.replace(",", "")
        .split()[1][:-1]
    )

    print(keyword, "총 개수:", count)

    links = []
    products = []

    for _ in range((count // 12)):
        driver.find_element_by_xpath('//*[@id="root"]/div[1]/section/article/button').click()
        time.sleep(1)

    links_list = driver.find_elements_by_class_name("ProductItemV2_itemImage__3fgX3")
    for link in links_list:
        links.append(link.get_attribute("href"))

    driver.quit()

    printProgressBar(0, len(links), prefix="Progress:", suffix="Complete", length=50)
    for idx, link in enumerate(links):
        item = {}
        options = webdriver.ChromeOptions()
        options.add_argument("headless")
        driver = webdriver.Chrome("./driver/chromedriver", options=options)

        driver.get(link)
        driver.implicitly_wait(1000)

        product_name = driver.find_element_by_xpath('//*[@id="root"]/div[1]/div[2]/div[2]/div/p').text

        price = driver.find_element_by_xpath('//*[@id="root"]/div[1]/div[2]/div[2]/div/div/p/strong').text

        img = driver.find_element_by_xpath(
            '//*[@id="root"]/div[1]/div[2]/div[1]/div/div/div[2]/div/img'
        ).get_attribute("src")

        descriptions = driver.find_elements_by_class_name("f16")
        description = ""
        for desc in descriptions:
            description += desc.text + "\n"

        view_count = driver.find_element_by_xpath(
            '//*[@id="root"]/div[1]/div[2]/div[2]/div/div/div/p[2]/span'
        ).text

        item["product_name"] = product_name
        item["price"] = price
        item["link"] = link
        item["img"] = img
        item["description"] = description
        item["view_count"] = view_count

        # print(item)
        products.append(item)

        driver.quit()
        printProgressBar(idx + 1, len(links), prefix="Progress:", suffix="Complete", length=50)

    # 엘라스틱 서치 IP주소와 포트(기본:9200)로 연결한다
    es = Elasticsearch("http://127.0.0.1:9200/")  # 환경에 맞게 바꿀 것

    # 기존 인덱스 데이터 삭제
    es.indices.delete(index=index_name, ignore=[400, 404])

    body = {
        "settings": {
            "index": {
                "analysis": {
                    "tokenizer": {
                        "nori_tokenizer": {
                            "type": "nori_tokenizer",
                        },
                    },
                    "analyzer": {
                        # nori 분석기 설정
                        "nori_korean": {"type": "custom", "tokenizer": "nori_tokenizer"},
                    },
                }
            }
        },
        "mappings": {
            "properties": {
                "product_name": {
                    "type": "text",
                    # name에 nori 형태소 분석기 설정
                    "analyzer": "nori_korean",
                },
                "description": {
                    "type": "text",
                },
            }
        },
    }
    es.indices.create(index=index_name, body=body)

    for prod in products:
        # print(prod)
        es.index(index=index_name, body=prod)
    es.indices.refresh(index=index_name)

    # results = es.search(index=index_name, body={"from": 0, "size": 10, "query": {"match_all": {}}})
    # for result in results["hits"]["hits"]:
    #     print("score:", result["_score"], "source:", result["_source"])


if __name__ == "__main__":
    index_name = "products"
    joongonara(search_keyword, index_name)
