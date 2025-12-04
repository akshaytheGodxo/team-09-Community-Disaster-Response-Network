from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage
from dotenv import load_dotenv
import os

load_dotenv()

MODEL = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
OPENAI_KEY = os.getenv("OPENAI_API_KEY")

llm = ChatOpenAI(model=MODEL, api_key=OPENAI_KEY, temperature=0)

def build_admin_alert(response_text: str, classification_text: str, authenticity_text: str) -> str:
    prompt = f"""
You are an Admin Alert Generator.

INPUT:
RESPONSE:
{response_text}

CLASSIFICATION:
{classification_text}

AUTHENTICITY:
{authenticity_text}

TASK:
If notify_admin is true:
    admin_alert: <short alert>
    priority: high
    send_dashboard_alert: true

Else:
    admin_alert: none
    priority: none
    send_dashboard_alert: false

OUTPUT FORMAT:
admin_alert: <text>
priority: <value>
send_dashboard_alert: <true|false>
"""
    resp = llm.invoke([HumanMessage(content=prompt)])
    return resp.content.strip()
