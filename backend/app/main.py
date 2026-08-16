from fastapi import FastAPI
from .database import Base, engine
from .routers import users
from . import models

app = FastAPI(title="Supplier Performance Rating System")

Base.metadata.create_all(bind=engine)

app.include_router(users.router)

@app.get("/")
def home():
    return {"message": "Supplier Performance Rating System API is running"}

@app.get("/db-test")
def db_test():
    return {"message": "MySQL database connected successfully"}