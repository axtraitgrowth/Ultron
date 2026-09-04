# Local Development Guide

## 1. Prerequisites
- Node.js v18+, v20+, or v24+
- npm v9+
- (Optional) Docker for local PostgreSQL and Redis

## 2. Quick Setup Commands
```bash
# 1. Install all workspace dependencies
npm install

# 2. Build shared packages
npm run build:packages

# 3. Copy environment configuration
cp .env.example .env

# 4. Start NestJS Backend API (Port 3001)
npm run dev:api

# 5. Start Next.js Web Frontend (Port 3000)
npm run dev:web

# 6. (Optional) Start Desktop Agent Daemon
npm run dev:desktop
```

## 3. Running Automated Tests
```bash
# Run all unit and integration tests across packages
npm test
```
