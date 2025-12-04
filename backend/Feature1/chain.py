from Feature1.agents.classify_agent import classify_disaster
from Feature1.agents.misinformation_agent import check_misinformation
from Feature1.agents.response_agent import generate_response
from Feature1.agents.admin_agent import build_admin_alert

def run_disaster_chain(user_text: str) -> dict:
    classification = classify_disaster(user_text)
    authenticity = check_misinformation(classification)
    response = generate_response(classification, authenticity)
    admin_alert = build_admin_alert(response, classification, authenticity)

    return {
        "classification": classification,
        "authenticity": authenticity,
        "response": response,
        "admin_alert": admin_alert
    }
