from marshmallow import fields, Schema


# Requests
class RequestNotificationSchema(Schema):
      email = fields.Str(description="유저 이메일", required=True)
      product = fields.Str(description="등록할 상품", required=True)
      price = fields.Int(description="가격", required=True)