FROM elasticsearch:7.17.1
RUN bin/elasticsearch-plugin install analysis-nori