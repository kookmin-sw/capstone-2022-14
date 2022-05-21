class ItemBase:
    def __init__(self):
        self.market = ""
        self.url = ""
        self.pid = ""
        self.keyword = ""
        self.title = ""
        self.desc = ""
        self.price = ""
        self.date = ""
        self.pictures = []
        self.views = 0
        self.region = ""
        self.latitude = ""
        self.longitude = ""

    def __str__(self):
        return str(self.__dict__)
