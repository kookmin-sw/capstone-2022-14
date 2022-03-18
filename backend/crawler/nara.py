from selenium import webdriver
import time

driver = webdriver.Chrome("./driver/chromedriver")
BOARD_URL = "https://cafe.naver.com/ArticleList.nhn?search.clubid=10050146&search.menuid=334&search.boardtype=L"
driver.get(BOARD_URL)

dataset = []

time.sleep(2)

driver.switch_to.frame("cafe_main")

PAGE = 2
for _ in range(1, PAGE + 1):
    tag = driver.find_elements_by_xpath('//div[@class="article-board m-tcol-c"]//table/tbody/tr')
    time.sleep(2)

    for i in range(len(tag)):
        dataset.append(tag[i].text)

    if _ % 10 == 0:
        driver.find_element_by_link_text("다음").click()
    else:
        page_num = str(_ + 1)
        driver.find_element_by_link_text(page_num).click()
    time.sleep(2)

driver.quit()

# 짝수 줄마다 나오는 닉네임 제거
for i in range(len(dataset) - 1, -1, -1):
    if i % 2 == 1:
        del dataset[i]

# 공지사항 제거
for i in range(len(dataset) - 1, -1, -1):
    if "공지" in dataset[i]:
        del dataset[i]

result = []
for i in range(len(dataset)):
    print(dataset[i].split("\n"))
    result.append(dataset[i].split("\n"))

print("length of result:", len(result))
