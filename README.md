# ULTRON // Autonomous Cross-Platform AI Agent Operating System

**Ultron** is a production-ready, fully functional cross-platform AI Agent platform with an autonomous ReAct orchestration core, multi-provider AI reasoning layer, real-time WebSocket state synchronization, modular tool execution registry, multi-tier persistent memory, background cron automation engine, secure desktop OS bridge, and a cyber-futuristic interface designed from the ground up for mobile, tablet, laptop, desktop, and 4K displays.

---

## 🌟 Key Capabilities & Features

### 1. Autonomous AI Agent Core (ReAct Loop)
- **Real-Time State Machine**: `IDLE` ➔ `LISTENING` ➔ `UNDERSTANDING` ➔ `PLANNING` ➔ `EXECUTING` ➔ `VERIFYING` ➔ `COMPLETED` / `ERROR`.
- **Dynamic Reasoning**: Deconstructs natural language & voice commands into actionable subtasks, chooses tools, executes them safely, observes results, and self-corrects.
- **Human-In-The-Loop (HITL) Gate**: Dangerous/destructive tools (e.g. system commands, deleting files) trigger an interactive countdown confirmation modal before execution.

### 2. Multi-Provider AI Architecture
- **Google Gemini Adapter**: Native support for Google Gemini 2.5 / 3.7 models with multimodal capabilities.
- **OpenAI Adapter**: GPT-4o / GPT-4o-mini function calling.
- **Anthropic Claude Adapter**: Claude 3.5 Sonnet support.
- **Ollama Adapter**: Local offline LLMs via `localhost:11434`.
- **Autonomous Local Heuristic Engine**: Built-in fallback that executes real ReAct loops, tool decisions, calculations, system diagnostics, and memory extractions out of the box without requiring external API keys.

### 3. Modular Tool Registry (12 Built-in Tools)
| Tool ID | Name | Category | Permission Level | Description |
|---|---|---|---|---|
| `calculator` | Calculator & Math Engine | Computation | `SAFE` | Accurate algebraic, trigonometric, and statistical calculations |
| `datetime_tool` | Date & Time Engine | Computation | `SAFE` | Current time, timezone conversions, and calendar arithmetic |
| `web_search` | Web Search & Discovery | Search | `SAFE` | Live web search with DuckDuckGo / scraper extraction |
| `browser_interaction` | Browser Web Reader | Browser | `SAFE` | Clean markdown and text extractor for web URLs |
| `file_manager` | Workspace File Manager | Filesystem | `CONFIRM_DESTRUCTIVE` | Read, write, list, and delete files within sandboxed storage |
| `code_runner` | Sandboxed Code Runner | Computation | `CONFIRM_ALWAYS` | Safe VM execution for JavaScript with timeout and logs |
| `screenshot` | Desktop Screen Capture | System | `CONFIRM_DESTRUCTIVE` | Native desktop screen capture via desktop agent bridge |
| `system_control` | System Control & Stats | System | `CONFIRM_DESTRUCTIVE` | Host CPU, RAM, OS metrics, app launcher, and CLI bridge |
| `image_analysis` | Vision & Image Analyzer | Vision | `SAFE` | Image OCR and visual structure inspector |
| `document_analyzer` | Document Intelligence | Document | `SAFE` | Multi-line text/PDF document parser and query extractor |
| `notifications` | Notification Dispatcher | Productivity | `SAFE` | Real-time push and in-app alert broadcaster |
| `task_manager` | Task Coordinator | Productivity | `SAFE` | Subtask spawner, progress tracking, and step logger |

### 4. Multi-Tier Memory System
1. **Conversation Memory**: Rolling active chat history with dynamic token truncation.
2. **Session Memory**: In-memory task scratchpad and intermediate variable storage.
3. **Long-Term Memory**: Persistent facts, user habits, biographical data, and preferences indexed with semantic keyword ranking.
4. **Task Memory**: Historical records of previous background workflows and retrospectives.
- **Privacy Controls**: Dedicated UI to search, edit, delete, clear all, and manage memories.

### 5. Desktop Agent Bridge (`packages/desktop-agent`)
- Standalone Node.js daemon communicating with backend via authenticated WebSockets.
- Capabilities: Live screen capture, application launcher, CPU/RAM telemetry, and safe terminal command runner with confirmation gates.

### 6. Background Automations & Cron Engine
- Cron scheduler for recurring routines (e.g., *"Daily morning intelligence briefing at 9:00 AM"*).
- Background execution runner logs execution history, updates task records, and triggers push notifications.

### 7. Cyber-Futuristic Responsive Interface ("Ultron OS")
- **Neural Orb**: Real-time 60fps HTML5 Canvas particle sphere with 6 dynamic reactive states.
- **Audio Waveform**: Interactive Web Audio frequency visualizer responding to microphone input and TTS speech.
- **Multi-Device Adaptability**:
  - **Mobile (< 768px)**: Bottom navigation bar, slide-out drawer, 44px+ touch targets, virtual keyboard compensation, and safe-area padding.
  - **Tablet (768px - 1024px)**: Responsive 2-column layout with collapsible timeline.
  - **Desktop / 4K Ultrawide (1024px - 3840px)**: Command Center dashboard with split multi-panel workspace.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js v18+ or v20+ / v24+
- npm v9+

### 1. Install All Dependencies & Build Packages
```bash
# Build shared contracts
npm run build:shared

# Build backend
npm run build:backend

# Build frontend
npm run build:frontend
```

### 2. Environment Configuration
Copy the example environment file:
```bash
cp .env.example .env
```
*(Optional: Add your `GEMINI_API_KEY`, `OPENAI_API_KEY`, or `ANTHROPIC_API_KEY` to `.env`. If left empty, Ultron seamlessly uses its Autonomous Local Engine.)*

### 3. Run the Backend & Frontend Dev Servers
```bash
# Terminal 1: Run Backend API & WebSocket Server (Port 3001)
npm run dev:backend

# Terminal 2: Run Frontend UI (Port 5173)
npm run dev:frontend
```

### 4. (Optional) Run Desktop Agent Bridge
```bash
# Terminal 3: Run Desktop Agent Bridge
npm run dev:desktop
```

---

## 🧪 Automated Testing

To run the complete automated test suite (verifying Database, User Auth, Password Hashing, Sessions, 4-Tier Memory, Tasks, Tool Registry, Sandboxed Code Runner, and Agent ReAct Loops):
```bash
npm test
```

---

## 📁 Repository Structure

```
Ultron/
├── packages/
│   ├── shared/            # Shared TypeScript types, Zod schemas, and WebSocket protocols
│   ├── backend/           # Node.js + Express + WebSockets + SQLite + Agent Orchestrator
│   ├── desktop-agent/     # Standalone Desktop Control Daemon & OS Bridge
│   └── frontend/          # React 19 + Vite + TailwindCSS + Canvas Visualizers + Cyber UI
├── .env.example
├── package.json
└── README.md
```

---

## 🛡️ Security & Privacy Architecture
- **Zero Client-Side Secrets**: All AI provider keys and database credentials reside strictly on the server.
- **Password Hashing**: Bcrypt with salted password rounds.
- **Session Tokens**: JWT with expiration and device tracking.
- **Human-In-The-Loop (HITL)**: High-risk tools require explicit real-time approval before OS execution.
- **Input Validation**: Strict Zod schema enforcement across all REST and WebSocket endpoints.
