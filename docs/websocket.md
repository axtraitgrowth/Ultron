# Real-Time WebSocket Architecture

## 1. Connection Endpoint
- **URL**: `ws://localhost:3001/ws` (or `http://localhost:3001/ws` for Socket.io transport)
- **Authentication**: JWT token passed in `auth: { token }` or query parameter `?token=...`.

## 2. Event Catalog

### Agent Execution Stream
| Event Name | Direction | Payload Description |
|---|---|---|
| `agent.run.started` | Server ➔ Client | Emits when user prompt initiates a new run |
| `agent.run.status_changed` | Server ➔ Client | Live state machine update (`PLANNING`, `EXECUTING`, etc.) |
| `agent.thought` | Server ➔ Client | Internal reasoning and chain-of-thought statement |
| `agent.step.started` | Server ➔ Client | Subtask step initialization |
| `agent.step.completed` | Server ➔ Client | Subtask step conclusion |
| `agent.message.delta` | Server ➔ Client | Streaming text chunk for immediate rendering |
| `agent.run.completed` | Server ➔ Client | Final verified output payload |
| `agent.run.failed` | Server ➔ Client | Error details |

### Tool Execution Stream
| Event Name | Direction | Payload Description |
|---|---|---|
| `tool.started` | Server ➔ Client | Parameters and tool name being dispatched |
| `tool.completed` | Server ➔ Client | Tool output result and duration (ms) |
| `tool.failed` | Server ➔ Client | Tool execution error |

### Human-In-The-Loop Confirmation
| Event Name | Direction | Payload Description |
|---|---|---|
| `confirmation.requested` | Server ➔ Client | Prompt, action details, danger level & countdown timer |
| `confirmation.responded` | Client ➔ Server | User approval or rejection with reason |
