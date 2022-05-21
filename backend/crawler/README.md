# Crawler
## Crontab Settings
``` 
*/30 * * * * [저장 경로]/capstone-2022-14/backend/crawler/scheduler.sh > [저장 경로]/capstone-2022-14/backend/crawler/scheduler.sh.log 2>&1 
```
> 30분마다 크롤링 실행

> 상세 설정은 `scheduler.sh`에서 설정 가능

## Crawling Keywords
> `keywords.txt` 에서 설정 가능

## Troubleshootings
* 처음 elasticsearch 실행 시 `accessdeniedexception` 뜨면서 종료된 경우
```
sudo chmod -R 777 data/
```
> 권한 부여하면 해결 가능

