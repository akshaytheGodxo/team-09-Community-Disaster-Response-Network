from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage
from dotenv import load_dotenv
import os

load_dotenv()

MODEL = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
OPENAI_KEY = os.getenv("OPENAI_API_KEY")

llm = ChatOpenAI(model=MODEL, api_key=OPENAI_KEY, temperature=0)

def classify_disaster(text: str) -> str:
    prompt = f"""
You are a Disaster Classification Agent.

TASK:
Extract:
- disaster_type (fire, flood, accident, medical, earthquake, storm, landslide, other)
- severity (low, medium, high)
- location (if present)
- number_of_people (estimate or unknown)
- summary (1 sentence)

OUTPUT FORMAT:
disaster_type: <type>
severity: <severity>
location: <location>
number_of_people: <number>
summary: <summary>

USER TEXT:
{text}
"""
    resp = llm.invoke([HumanMessage(content=prompt)])
    return resp.content.strip()
