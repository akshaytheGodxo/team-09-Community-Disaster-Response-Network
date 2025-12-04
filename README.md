
# Community Disaster Response Network (CDRN)

Smart disaster management platform for citizens, volunteers, and authorities.

## 🌪 What It Does

Working prototype demonstrates:

- **Citizen incident reporting + SOS**
- **Volunteer dashboard & task assignments**
- **Authority control panel with incident heatmap / map**
- **Real-time communication** (alerts, location updates)
- **Recovery phase workflows** (damage assessment & status tracking)

## 🧱 Tech Stack

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS, React Leaflet
- **Backend:** Node.js, Express, (MongoDB planned)
- **Maps:** OpenStreetMap + Leaflet


```md
# Team G9 – Community Disaster Response Network

| Name          | Roll No.      | Branch | Phone      | Email                          | Role    |
|--------------|---------------|--------|------------|--------------------------------|--------|
| PRASOON KUMAR| (fill)        | CSE    | 9757xxxxxx | prasoon.kumar_cs23@gla.ac.in   | Member |
| NEHA SINGH   | 2315001455    | CSE    | 8923548886 | neha.singh_cs23@gla.ac.in      | Member |
| AKSHAY SINGH | (fill)        | AIML   | 8318492363 | akshay.chauhan_cs.aiml23@...   | Captain|
| RUPAM GANGULY| (fill)        | AIML   | 8171551712 | rupam.ganguly_cs.aiml23@...    | Member |
| MADHAV GUPTA | (fill)        | DA     | 7251054896 | madhav.gupta_cs.da23@...       | Member |

````

## Working Prototype Should Demonstrate

- ✅ **Citizen incident reporting + SOS**
  - Mobile/web form with location, media upload (photo/video), incident type, SOS toggle
- ✅ **Volunteer dashboard & task assignments**
  - Volunteer view of open incidents, tasks, and routes
  - Simple workload indicator (tasks assigned vs completed)
- ✅ **Authority control panel with heatmap/map**
  - Overview dashboard (active incidents, resources, alerts)
  - Map with markers for incidents (later: heatmap layer)
- ✅ **Real-time communication**
  - Alert list on the right (high/medium/low)
  - Location updates and status changes visible instantly
- ✅ **Recovery phase workflows (damage assessment)**
  - Incident status: `Reported → In Progress → Resolved`
  - Optional damage notes and photos in “Resolved” state

---

## Documentation

- **Technical architecture** → `docs/Architecture.md`
- **API design** → `docs/API-Design.md`
- **Database schema** → `docs/DB-Schema.md`
- **Disaster phase coverage (20-25-40-15)** → `docs/DisasterPhases.md`

---

## Pitch

- **5–7 minute demo** (see `pitch/PitchOutline.md`)
- Flow: **Problem → Solution → Architecture → Live Workflow → Impact**
```

---
# API Design (Draft)

Base URL: `/api`

## 1. Incidents

- `GET /incidents`
  - Query: `status`, `priority`, `area`
- `POST /incidents`
  - Body: `{ title, description, lat, lng, mediaUrl?, priority, reporterContact, sos }`
- `PATCH /incidents/:id`
  - Body: `{ status, assignedVolunteerId?, notes? }`

## 2. Volunteers

- `GET /volunteers`
- `POST /volunteers`
- `PATCH /volunteers/:id` – update availability / workload

## 3. Shelters & Resources

- `GET /shelters`
- `POST /shelters`

## 4. Messages / Communication

- `GET /messages?incidentId=...`
- `POST /messages`
  - Body: `{ incidentId, senderRole, text }`
```


## Collection: shelters

```json
{
  "_id": "ObjectId",
  "name": "Community Hall A",
  "lat": 28.60,
  "lng": 77.20,
  "capacity": 250,
  "availableBeds": 120,
  "resources": ["water", "food", "medicine"]
}
```

## Collection: messages

```json
{
  "_id": "ObjectId",
  "incidentId": "ObjectId",
  "senderRole": "citizen | volunteer | authority",
  "text": "Rescue team dispatched.",
  "createdAt": "Date"
}
```

```md
# Disaster Phase Coverage (20–25–40–15)

> Mapping features to phases of disaster management.

1. **Mitigation (20%)**
   - Historic incident data & heatmap to identify hotspots.
   - Resource/shelter mapping for preparedness.

2. **Preparedness (25%)**
   - Volunteer registry & training dashboard.
   - Pre-configured broadcast templates for alerts.

3. **Response (40%)**
   - Live incident reporting + SOS.
   - Real-time map of requests, rescues, and roadblocks.
   - Task assignment to volunteers & workload tracking.
   - Two-way communication between citizens, volunteers, and control room.

4. **Recovery (15%)**
   - Damage assessment fields on resolved incidents.
   - Post-incident reports from authorities.
   - Data export for long-term planning.
````

---
```md
# Pitch Outline (5–7 minutes)

## 1. Problem (1 min)
- Disasters = chaos: fragmented info, slow response, no unified view.
- Citizens don’t know **where to report** or **where to go**.
- Volunteers & authorities struggle with **coordination** and **visibility**.

## 2. Solution – Community Disaster Response Network (1 min)
- Single platform connecting **citizens + volunteers + authorities**.
- Real-time map, incident reporting, task assignments, and communication.

## 3. Architecture Overview (1 min)
- Frontend: Next.js dashboard + map.
- Backend: Node/Express APIs (incidents, volunteers, shelters, messages).
- Data: Incident & shelter data stored centrally (MongoDB design).

## 4. Live Workflow Demo (3–4 min)
1. **Citizen reports incident + SOS**
   - Show how incident appears on map + alerts panel.
2. **Authority dashboard**
   - Stats cards: active incidents, personnel, resources, high-priority alerts.
3. **Volunteer coordination**
   - Assign volunteer → status changes from `REPORTED` to `IN_PROGRESS`.
4. **Recovery phase**
   - Mark incident `RESOLVED` with damage assessment.
5. **Communication**
   - Show alert messages / potential chat stream.

## 5. Impact & Future Scope (30–60 sec)
- Faster response, better transparency, scalable to any city/state.
- Future: SMS/IVR integration, offline mode, AI-based priority scoring.
```
