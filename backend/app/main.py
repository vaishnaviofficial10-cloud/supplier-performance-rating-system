from fastapi import FastAPI
from .database import engine

app = FastAPI(title="Supplier Performance Rating System")


@app.get("/")
def home():
    return {
        "message": "Supplier Performance Rating System API is running"
    }


@app.get("/db-test")
def database_test():
    try:
        with engine.connect():
            return {
                "message": "MySQL database connected successfully"
            }
    except Exception as e:
        return {
            "error": str(e)
        }