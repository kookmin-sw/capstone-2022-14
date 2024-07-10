[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/E--3axVr)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7073047&assignment_repo_type=AssignmentRepo)
[Open in Visual Studio Code](https://classroom.github.com/online_ide?assignment_repo_id=7073047&assignment_repo_type=AssignmentRepo)

# 애풀 중고물품 조회 및 가격 비교 서비스

## 1. 프로젝트 소개

이 프로젝트는 중고거래 플랫폼의 파편화로 인해 발생하는 문제점을 해결하여 보다 편리한 사용자 경험을 제공하는 데 목적이 있다. 플랫폼 파편화로 인해 이용자들은 여러 부정적 경험을 겪고 있다. 구매자의 경우 원하는 물품을 찾기 위해 여러 플랫폼에서 제품을 검색해야 하는 번거로움이 발생한다. 반면 판매자의 경우 판매하고자 하는 물건의 가격대를 알아보기 위해 여러 플랫폼에서 가격 비교를 해야 하는 문제가 있다. 이러한 불편함을 줄이기 위해 각 중고거래 플랫폼의 물품을 크롤링하여 찾고자 하는 제품만 사용자에게 보여주고, 해당 물품의 가격 추이를 볼 수 있는 기능을 제공하는 서비스를 개발하고자 한다.

---

## 2. Abstract

The purpose of this project is to provide a more convenient user experience by solving the problems caused by fragmentation of the used trading platform. Due to the fragmentation of the platform, users are experiencing a number of negative experiences. For buyers, the hassle of having to search for products on multiple platforms to find the desired item occurs. On the other hand, in the case of sellers, there is a problem in that they have to compare prices on multiple platforms to find out the price range of the goods they want to sell. In order to reduce this inconvenience, we intend to develop a service that crawls items on each used trading platform, shows only the products they want to find, and provides a function to view the price trend of the items.

---

## 3. 포스터

![다운로드](https://user-images.githubusercontent.com/26023759/170633046-2f6d6ff1-4e58-4022-8e9b-6b48156bffa5.png)

---

## 4. 시연 영상

[보러가기](https://www.youtube.com/watch?v=_poqCcyFmUc&feature=emb_title)

---

## 5. 팀 소개

**이준석(팀장)**

```
👨🏻‍💻****1680
📧lgh009833@kookmin.ac.kr
🔨Frontend
```

**이정우**

```
👨🏻‍💻****1676
📧lmwljw98@kookmin.ac.kr
🔨Backend
```

**임준혁**

```
👨🏻‍💻****1689
📧onejajae@kookmin.ac.kr
🔨Crawling
```

---

## 6. 사용법

- Backend

```
cd backend/
pip install -r requirements.txt
python run.py
```

- Frontend

```
cd frontend/
npm i
npm start
```

- Crawler
> Backend의 `requirements.txt`를 사용하여 라이브러리 설치
```
python backend/crawler/main.py 10 #크롤링할 페이지 수 
```

- Run by Docker (통합 환경 실행)
> 사전 준비 - Frontend Build
```
cd frontend/
npm i
npm run build
```

> 개발
```
sudo docker-compose -f docker-compose-dev.yaml up --build -d
```
* 페이지
http://127.0.0.1:2000

* API 문서
http://127.0.0.1:2000/docs

* Kibana
http://127.0.0.1:5601

> 배포
```
sudo docker-compose -f docker-compose-prod.yaml up --build -d
```
`backend/crawler/main.py`를 통해 크롤링 데이터 축적 후 API 사용 가능

---

## 7. 문서

- 중간보고서

  - [바로가기](https://github.com/kookmin-sw/capstone-2022-14/blob/master/docs/팀14-중간보고서.pdf)

- 중간발표자료

  - [바로가기](https://github.com/kookmin-sw/capstone-2022-14/blob/master/docs/팀14-중간발표자료.pdf)

- 최종발표자료

  - [바로가기](https://github.com/kookmin-sw/capstone-2022-14/blob/master/docs/팀14-최종발표자료.pdf)
