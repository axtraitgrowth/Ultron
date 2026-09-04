# Agent Orchestrator & State Machine

## 1. Lifecycle State Machine
Ultron transitions through 11 explicit states:

```
[IDLE] 
  │
  ├──► [LISTENING] (Voice capture active)
  │       │
  │       ▼
  └──► [UNDERSTANDING] (Intent classification & context parsing)
          │
          ▼
       [PLANNING] (Subtask breakdown & tool selection)
          │
          ├──────────────────────────┐
          ▼                          ▼
[WAITING_FOR_PERMISSION]      [EXECUTING] (Tool dispatch)
          │                          │
          └──────────────────────────┘
                                     │
                                     ▼
                                [OBSERVING] (Tool output evaluation)
                                     │
                                     ▼
                                [VERIFYING] (Outcome validation)
                                     │
                    ┌────────────────┴────────────────┐
                    ▼                                 ▼
               [COMPLETED]                         [FAILED]
```

## 2. ReAct Execution Flow
1. **Context Building**: Rolling chat history + Session Scratchpad + Semantic Memory retrieval.
2. **Tool Selection**: Provider evaluates available tool definitions.
3. **Execution**: `ToolRegistry.execute()` performs parameter validation and timeout enforcement.
4. **Observation & Reflection**: The agent analyzes tool outcomes, decides if follow-up tool calls are necessary, or concludes with a verified answer.
5. **Memory Extraction**: Crucial user preferences and facts are automatically identified and stored in long-term memory.
