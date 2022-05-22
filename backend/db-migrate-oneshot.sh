#!/bin/bash

# db에 capstone Database를 먼저 만들 것
# CREATE DATABASE capstone;
sudo docker exec capstone-api "/bin/bash" -c "export FLASK_APP=server.main && flask db init"
sudo docker exec capstone-api "/bin/bash" -c "export FLASK_APP=server.main && flask db migrate"
sudo docker exec capstone-api "/bin/bash" -c "export FLASK_APP=server.main && flask db upgrade"