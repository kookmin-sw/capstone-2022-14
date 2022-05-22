from server.main import db


class HotProducts(db.Model):
    __tablename__ = "hot_products"
    __table_args__ = {"mysql_collate": "utf8_bin"}
    id = db.Column(db.Integer, primary_key=True)
    product = db.Column(db.String(60), nullable=False, unique=True)
    count = db.Column(db.Integer, nullable=False, default=1)

    @staticmethod
    def isExistProduct(query):
        return HotProducts.query.filter((HotProducts.product == query)).one_or_none()

    @staticmethod
    def addProduct(query):
        db.session.add(HotProducts(product=query))

    @staticmethod
    def increaseCount(query):
        db.session.query(HotProducts).filter_by(product=query).update({"count": HotProducts.count + 1})
