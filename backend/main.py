from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from Feature1.app import app as app1
# from Feature2.main import app as app2
# from Feature3.main import app as app3

app = FastAPI(title="Master Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def health():
    return {"status": "ok"}

app.mount("/1", app1)
# app.mount("/2", app2)
# app.mount("/3", app3)
