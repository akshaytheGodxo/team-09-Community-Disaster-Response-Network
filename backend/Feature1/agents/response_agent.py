from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage
from dotenv import load_dotenv
import os

load_dotenv()

MODEL = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
OPENAI_KEY = os.getenv("OPENAI_API_KEY")

llm = ChatOpenAI(model=MODEL, api_key=OPENAI_KEY, temperature=0)

def generate_response(classification_text: str, authenticity_text: str) -> str:
    prompt = f"""
You are a Disaster Response Agent.

INPUT:
CLASSIFICATION:
{classification_text}

AUTHENTICITY:
{authenticity_text}

TASK:
Return:
user_message: <message>
recommended_actions:
- action 1
- action 2
- action 3
notify_admin: <true|false>

RULE:
notify_admin = true when severity = high AND authenticity = likely_real
"""
    resp = llm.invoke([HumanMessage(content=prompt)])
    return resp.content.strip()
