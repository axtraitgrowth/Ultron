# Master System Architecture — Ultron AI Agent Platform

## 1. Overview
The **Ultron Platform** is designed as a unified personal AI operating system across Web (Next.js), Desktop (Windows/macOS Desktop Agent), and Mobile (Flutter for Android & iOS).

## 2. High-Level Topology

```
USER CLIENTS
├── apps/web (Next.js + Tailwind + Web Audio)
├── apps/mobile (Flutter for Android & iOS)
└── apps/desktop (Windows & macOS Local Agent Daemon)
        │
        ▼
SECURE WEBSOCKET & REST GATEWAY (/api/v1)
        │
        ▼
MODULAR NESTJS BACKEND
├── Auth & User Management (JWT, Sessions)
├── Agent Orchestrator & State Machine
├── Task & Background Pipelines
├── 4-Tier Memory Bank (Short, Session, Long, Task)
├── Modular Tool Execution Registry (Permission Guard)
├── FileStorageProvider Abstraction
├── Automations & Cron Scheduler
└── BullMQ Background Job Workers
        │
        ▼
INFRASTRUCTURE LAYER
├── PostgreSQL (Prisma ORM with 20+ entities)
└── Redis (BullMQ Queues, State Cache & Rate Limiting)
```

## 3. Core Design Principles
1. **Zero Client Secrets**: All API keys, database credentials, and third-party tokens reside exclusively on the server.
2. **ReAct Autonomous Loop**: Continuous planning, tool execution, observation, and verification loop.
3. **Explicit State Machine**: 11 strongly-typed agent run states shared across all platforms.
4. **Human-In-The-Loop (HITL)**: Mandatory confirmation gates for high-risk operations.
5. **Universal Screen Responsiveness**: Continuous fluid reflow from 320px mobile up to 4K Ultrawide displays without fixed width assumptions.
