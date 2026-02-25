# 🎫 Ticket Management Application

A full-stack support ticket management system for merchants to create, view, and manage support tickets.

## Installation & Running

### Backend

```bash
cd backend
npm install
node server.js
# Server runs at http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
# App runs at http://localhost:5173
```

---

## 🐳 Docker Setup


### Run with Docker Compose

```bash
# Build & start both containers
docker compose up --build

# Backend  → http://localhost:5000
# Frontend → http://localhost:5173
```

### Stop Containers

```bash
docker compose down
```

### Run Individually (without Compose)

**Backend:**
```bash
cd backend
docker build -t ticket-backend .
docker run -p 5000:5000 ticket-backend
```

**Frontend:**
```bash
cd frontend
docker build -t ticket-frontend .
docker run -p 5173:5173 ticket-frontend
```


