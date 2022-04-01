from selenium import webdriver
import time
from elasticsearch import Elasticsearch

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


def joongonara(keyword):
    url = "https://m.joongna.com/search-list/product?searchword={}".format(keyword)

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
    print("총 개수:", count)

    products = []
    links = []

    for _ in range((count // 11)):
        driver.find_element_by_xpath('//*[@id="root"]/div[1]/section/article/button').click()
        time.sleep(1)

    for i in range(1, count):
        item = {}

        product_name = driver.find_element_by_xpath(
            '//*[@id="root"]/div[1]/section/article/div/div[' + str(i) + "]/div/div/a/span"
        ).text

        price = driver.find_element_by_xpath(
            '//*[@id="root"]/div[1]/section/article/div/div[' + str(i) + "]/div/div/a/p"
        ).text

        link = driver.find_element_by_xpath(
            '//*[@id="root"]/div[1]/section/article/div/div[' + str(i) + "]/div/a"
        ).get_attribute("href")

        item["product_name"] = product_name
        item["price"] = price
        item["link"] = link

        products.append(item)
        links.append(link)

    driver.quit()

    printProgressBar(0, count, prefix="Progress:", suffix="Complete", length=50)
    for idx, link in enumerate(links):
        options = webdriver.ChromeOptions()
        options.add_argument("headless")
        driver = webdriver.Chrome("./driver/chromedriver", options=options)

        driver.get(link)
        driver.implicitly_wait(1000)

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

        products[idx]["img"] = img
        products[idx]["description"] = description
        products[idx]["view_count"] = view_count
        driver.quit()
        printProgressBar(idx + 1, count, prefix="Progress:", suffix="Complete", length=50)

    # print(products)

    # 엘라스틱 서치 IP주소와 포트(기본:9200)로 연결한다
    es = Elasticsearch("http://127.0.0.1:9200/")  # 환경에 맞게 바꿀 것

    index_name = "products"

    for prod in products:
        es.index(index=index_name, body=prod)
    es.indices.refresh(index=index_name)

    # 상품명에 '노트북'을 검색한다
    results = es.search(
        index=index_name, body={"from": 0, "size": 10, "query": {"match": {"goods_name": "맥북"}}}
    )
    for result in results["hits"]["hits"]:
        print("score:", result["_score"], "source:", result["_source"])


joongonara("맥북")
