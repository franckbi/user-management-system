# User Management System

This repository contains a basic full-stack User Management System coded in TypeScript. It includes:

- **Frontend**: React + TypeScript + MUI
- **Backend**: Express + TypeScript + Zod validation
- **Orchestration**: Docker Compose (frontend, backend, optional Postgres)

---

## Setup Instructions

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/user-management-system.git
   cd user-management-system
   ```

2. **Start all services**

   ```bash
   docker-compose up --build -d
   ```

3. **View the application**

   - Frontend UI: [http://localhost:3000](http://localhost:3000)
   - Backend API (list users): [http://localhost:8080/api/users](http://localhost:8080/api/users)

4. **Stop services**

   ```bash
   docker-compose down
   ```
Assumptions & Design Decisions

In-memory data store: Used a simple array in the backend to hold user records.Reason: meets requirements without extra complexity.Next step: swap to Postgres container (already defined in Compose) for persistence.

Shared TypeScript interfaces: Centralized User interface under shared/types/User.ts and aliased via @shared/*.Benefit: avoids drift between front- and back-end data models.

UI library: Material-UI (MUI) was chosen for rapid, responsive component layout.Alternative: plain CSS or Tailwind if customizing further.

Validation: Zod schema in the backend ensures strict type/format checks on incoming POST/PUT bodies.Error handling: centralized middleware returns clear JSON errors.

Docker Compose: orchestrates three services:

backend — Node.js/Express API on port 8080

frontend — React build served on port 3000

db  — Postgres container for future data persistence

Proxy configuration: CRA dev server proxies /api to the backend during local development; production build uses a static server without proxy.


