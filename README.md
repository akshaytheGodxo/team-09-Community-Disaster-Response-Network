
# Community Disaster Response Network (CDRN)

Smart disaster management platform for citizens, volunteers, and authorities.

##  What It Does

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
| PRASOON KUMAR| 2315001650    | CSE    | 9757xxxxxx | prasoon.kumar_cs23@gla.ac.in   | Member |
| NEHA SINGH   | 2315001455    | CSE    | 8923548886 | neha.singh_cs23@gla.ac.in      | Member |
| AKSHAY SINGH | 2315510019    | AIML   | 8318492363 | akshay.chauhan_cs.aiml23@...   | Captain|
| RUPAM GANGULY| 2315510177    | AIML   | 8171551712 | rupam.ganguly_cs.aiml23@...    | Member |
| MADHAV GUPTA | 2315200017    | DA     | 7251054896 | madhav.gupta_cs.da23@...       | Member |

````
![WhatsApp Image 2025-12-04 at 12 18 08_352f704e](https://github.com/user-attachments/assets/b365dca8-4ea3-4f5e-9b74-0b4593023eb4)

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
![WhatsApp Image 2025-12-04 at 12 17 11_69ad24b7](https://github.com/user-attachments/assets/7edeb91b-9f25-495a-8939-938797fabded)
ScreenShot of Website: 
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/91b62273-ae75-49c5-a79c-114bae07b2e0" />
ScreenShot of Main Dashboard: 
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f0cf1655-3634-4a3d-b7e3-fe6a265e5ab2" />
ScreenShot of Auth
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2b491eb7-2c0c-473e-9cc9-7ee3a67bedcd" />

Environment Variables for Supabase authentication:
DB_PASS=N2Jaci5WzwKPf373
NEXT_PUBLIC_SUPABASE_URL=https://viehaewdrneampysxkhc.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpZWhhZXdkcm5lYW1weXN4a2hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MjE2OTUsImV4cCI6MjA4MDM5NzY5NX0.DKbgzuFRZo7rgANgTqjBCme8MmXJUtq-owwFSnf2Ngk
