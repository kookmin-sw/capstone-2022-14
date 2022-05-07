from elasticsearch import Elasticsearch
from db.esconfig import *


class EsStore:
    def __init__(self, host, index=index_name, body=body):
        self.es = Elasticsearch(host)
        self.index = index_name
        self.body = body

        if not self.es.indices.exists(index=index):
            self.es.indices.create(index=index_name, body=body)

    def insert(self, body, id):
        return self.es.index(index=self.index, body=body, id=id)

    def search(self, query):
        return self.es.search(index=self.index, body=query)

    def delete(self, query):
        pass

    def update(self, query):
        pass

    def refresh(self):
        return self.es.indices.refresh(index=self.index)
