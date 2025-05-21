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
