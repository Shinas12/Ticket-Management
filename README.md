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

### Prerequisites

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) for Windows
2. After installation, **restart your PC**
3. Open Docker Desktop and make sure it's running (whale icon in taskbar)

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

### Docker Notes

- Images use **Node 18 Alpine** (lightweight ~50MB base)
- `node_modules` are installed fresh inside the container (not copied from local)
- No need to have Node.js installed locally when running via Docker
