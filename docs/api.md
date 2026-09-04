# REST API Contracts (/api/v1)

All endpoints are versioned with the `/api/v1` prefix and return JSON payloads.

## Standardized Error Model
```json
{
  "code": "BAD_REQUEST",
  "message": "Validation failed on prompt field.",
  "requestId": "550e8400-e29b-41d4-a716-446655440000",
  "details": ["prompt must contain at least 1 character"],
  "timestamp": "2026-08-31T20:00:00.000Z",
  "path": "/api/v1/agent/runs"
}
```

## Endpoints Catalog

### Authentication
- `POST /api/v1/auth/register`: Create user account.
- `POST /api/v1/auth/login`: Authenticate with email/password and obtain JWT.
- `GET /api/v1/auth/me`: Retrieve current user profile.

### Agent Orchestration
- `POST /api/v1/agent/runs`: Trigger an autonomous agent execution run.
- `GET /api/v1/agent/runs/:id`: Get status, steps, and tool execution logs for a run.
- `POST /api/v1/agent/runs/:id/cancel`: Cancel an active agent run.

### Conversations & Messages
- `GET /api/v1/conversations`: List user conversation threads.
- `POST /api/v1/conversations`: Create a new conversation thread.
- `GET /api/v1/conversations/:id`: Retrieve messages within a thread.
- `POST /api/v1/conversations/:id/messages`: Post a new message.
- `DELETE /api/v1/conversations/:id`: Delete thread.

### Modular Tools
- `GET /api/v1/tools`: List all registered tools and their permission boundaries.
- `POST /api/v1/tools/:id/execute`: Direct manual invocation and test harness.

### Multi-Tier Memory Bank
- `GET /api/v1/memories`: Query memories by layer or semantic keyword.
- `POST /api/v1/memories`: Create a persistent memory item.
- `DELETE /api/v1/memories/:id`: Delete a specific memory item.
- `DELETE /api/v1/memories/clear`: Clear all memories or a specific tier.

### Tasks & Automations
- `GET /api/v1/tasks`: List persistent background tasks.
- `POST /api/v1/tasks`: Spawn a new task.
- `POST /api/v1/tasks/:id/cancel`: Cancel task execution.
- `GET /api/v1/automations`: List scheduled routines.
- `POST /api/v1/automations`: Create new cron automation.

### Connected Devices
- `GET /api/v1/devices`: List paired desktop/mobile devices.
- `POST /api/v1/devices/register`: Pair a new device daemon.
- `POST /api/v1/devices/:id/action`: Dispatch remote command.
- `DELETE /api/v1/devices/:id`: Revoke device pairing.

### System & Health
- `GET /api/v1/health`: Liveness and readiness status check (PostgreSQL, Redis, AI Runtime).
