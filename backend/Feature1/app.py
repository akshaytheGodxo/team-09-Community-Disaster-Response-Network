from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import os, json

from Feature1.chain import run_disaster_chain

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Disaster Management AI Backend")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ALERTS_FILE = "data/alerts.json"

os.makedirs("data", exist_ok=True)
if not os.path.exists(ALERTS_FILE):
    with open(ALERTS_FILE, "w") as f:
        json.dump([], f)

class Report(BaseModel):
    reporter_id: str | None = None
    text: str

def save_alert(alert: dict):
    with open(ALERTS_FILE, "r") as f:
        data = json.load(f)

    data.append(alert)

    with open(ALERTS_FILE, "w") as f:
        json.dump(data, f, indent=2)


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/report")
def submit_report(report: Report):
    if not report.text.strip():
        raise HTTPException(status_code=400, detail="Empty report text")

    result = run_disaster_chain(report.text)

    admin_alert_text = result["admin_alert"]
    notify = "send_dashboard_alert: true" in admin_alert_text.lower()

    if notify:
        alert = {
            "reporter_id": report.reporter_id,
            "classification": result["classification"],
            "authenticity": result["authenticity"],
            "response": result["response"],
            "admin_alert": result["admin_alert"]
        }
        save_alert(alert)

    return {
        "ok": True,
        "admin_notified": notify,
        "result": result
    }


@app.get("/alerts")
def get_alerts():
    with open(ALERTS_FILE, "r") as f:
        data = json.load(f)
    return {"alerts": data}


@app.get("/latest-alert")
def latest_alert():
    with open(ALERTS_FILE, "r") as f:
        data = json.load(f)
    if not data:
        return {"latest": None}
    return {"latest": data[-1]}
