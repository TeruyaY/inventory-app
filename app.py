from fastapi import FastAPI
from tortoise.contrib.fastapi import register_tortoise
from models import (supplier_pydantic, supplier_pydanticIn, Supplier)
from models import (product_pydantic, product_pydanticIn, Product)

# mail
from typing import List
from fastapi import BackgroundTasks, FastAPI
from fastapi_mail import ConnectionConfig, FastMail, MessageSchema, MessageType, NameEmail
from pydantic import BaseModel, EmailStr
from starlette.responses import JSONResponse

# dotenv
from dotenv import dotenv_values

# credentials
credentials = dotenv_values(".env")

app = FastAPI()

@app.get('/')
def index():
    return {"Msg" : "go to /docs for the API documentation"}

@app.post('/supplier')
async def add_supplier(supplier_info: supplier_pydanticIn):
    supplier_obj = await Supplier.create(**supplier_info.dict(exclude_unset=True))
    response = await supplier_pydantic.from_tortoise_orm(supplier_obj)
    return {"status": "ok", "data": response}

@app.get('/supplier')
async def get_all_suppliers():
    response = await supplier_pydantic.from_queryset(Supplier.all())
    return {"status": "ok", "data": response}

@app.get('/supplier/{supplier_id}')
async def get_specific_supplier(supplier_id: int):
    response = await supplier_pydantic.from_queryset_single(Supplier.get(id=supplier_id))
    return {"status": "ok", "data": response}

@app.put('/supplier/{supplier_id}')
async def update_supplier(supplier_id: int, update_info: supplier_pydanticIn):
    supplier = await Supplier.get(id=supplier_id)
    update_info = update_info.dict(exclude_unset=True)
    supplier.name = update_info['name']
    supplier.company = update_info['company']
    supplier.email = update_info['email']
    supplier.phone = update_info['phone']
    await supplier.save()
    response = await supplier_pydnatic.from_tortoise_orm(supplier)
    return {"status":"ok", "data": response}

@app.delete('/supplier/{supplier_id}')
async def delete_supplied(supplier_id: int):
    await Supplier.get(id=supplier_id).delete()
    return {"status":"ok"}

@app.post('/product/{supplier_id}')
async def add_product(supplier_id: int, product_detail: product_pydanticIn):
    # 1. URLのIDから仕入れ先を取得
    supplier = await Supplier.get(id=supplier_id)
    # 2. 届いたデータを辞書に変換
    product_info = product_detail.dict(exclude_unset=True)
    # 3. 売上(revenue)を計算して辞書に追加
    product_info['revenue'] = float(product_info['quantity_sold'] * product_info['unit_price'])
    # 4. 保存（**で辞書を展開し、さらに仕入れ先情報を添える）
    product_obj = await Product.create(**product_info, supplied_by=supplier)
    # 5. レスポンス用に変換して返す
    response = await product_pydantic.from_tortoise_orm(product_obj)
    return {"status":"ok", "data":response}

@app.get('/product')
async def get_all_products():
    response = await product_pydantic.from_queryset(Product.all())
    return {"status":"ok", "data":response}

@app.get('/product/{product_id}')
async def get_specific_product(product_id: int):
    response = await product_pydantic.from_queryset_single(Product.get(id=product_id))
    return {"status":"ok", "data":response}

@app.put('/product/{product_id}')
async def update_product(product_id: int, update_info: product_pydanticIn):
    product = await Product.get(id=product_id)
    update_info = update_info.dict(exclude_unset=True)
    product.name = update_info['name']
    product.quantity_in_stock = update_info['quantity_in_stock']    
    product.quantity_sold += update_info['quantity_sold']
    product.unit_price = update_info['unit_price']
    product.revenue += float(update_info['quantity_sold'] * update_info['unit_price'] + update_info['revenue'])
    await product.save()
    response = await product_pydnatic.from_tortoise_orm(product)
    return {"status":"ok", "data":response}

@app.delete('/product/{product_id}')
async def delete_product(product_id: int):
    await Product.get(id=product_id).delete()
    return {"status":"ok"}


class EmailSchema(BaseModel):
    email: List[NameEmail]  # Supports both "user@example.com" and "Name <user@example.com>" formats

class EmailContent(BaseModel):
    message: str
    subject: str

conf = ConnectionConfig(
    MAIL_USERNAME = credentials['EMAIL'],
    MAIL_PASSWORD = credentials['PASS'],
    MAIL_FROM = credentials['EMAIL'],
    MAIL_PORT = 465,
    MAIL_SERVER = "smtp.gmail.com",
    MAIL_STARTTLS = False,
    MAIL_SSL_TLS = True,
    USE_CREDENTIALS = True,
    VALIDATE_CERTS = True
)

@app.post('/email/{product_id}')
async def send_email(product_id: int, content: EmailContent):
    product = await Product.get(id=product_id)
    supplier = await product.supplied_by
    supplier_email = [supplier.email]

    html = """
    <h5>John Doe Business LTD</h5>
    <br>
    <p>{content.message}</p>
    <br>
    <h6>>Best Regards/h6>
    <h6>John Business LTD</h6>
    """
    message = MessageSchema(
        subject={content.subject},
        recipients=supplier_email,  # Can include "Name <email@domain.com>" format
        body=html,
        subtype=MessageType.html)

    fm = FastMail(conf)
    await fm.send_message(message)
    return {"status":"ok"}


register_tortoise(
    app,
    db_url="sqlite://database.sqlite3", 
    modules={"models" : ["models"]},
    generate_schemas=True,
    add_exception_handlers=True
)