from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage
from dotenv import load_dotenv
import os

load_dotenv()

MODEL = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
OPENAI_KEY = os.getenv("OPENAI_API_KEY")

llm = ChatOpenAI(model=MODEL, api_key=OPENAI_KEY, temperature=0)

def check_misinformation(classification_text: str) -> str:
    prompt = f"""
You are a Misinformation Detection Agent.

Given this classification:

{classification_text}

TASK:
- authenticity: likely_real, unclear, likely_fake
- confidence: 0–1
- reasons:
  - reason 1
  - reason 2

OUTPUT FORMAT:
authenticity: <value>
confidence: <value>
reasons:
- <reason 1>
- <reason 2>
"""
    resp = llm.invoke([HumanMessage(content=prompt)])
    return resp.content.strip()
