from server.main import db


class Notification(db.Model):
    __tablename__ = "notification"
    __table_args__ = {"mysql_collate": "utf8_bin"}
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(60), nullable=False)
    product = db.Column(db.String(60), nullable=False)
    price = db.Column(db.Integer, nullable=False)

    @staticmethod
    def addNotification(email, product, price):
        db.session.add(Notification(email=email, product=product, price=price))

    @staticmethod
    def getNotification():
        notifications = db.session.query(Notification).all()
        return notifications

