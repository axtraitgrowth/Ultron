# Database Architecture & Entity Specifications

## Primary Persistent Engine
- **Database**: PostgreSQL 16
- **ORM**: Prisma Client v6

## Entity Relationship Overview
The system schema includes 20 primary relational models:

1. **`users`**: Root identity table containing email, passwordHash (bcrypt), name, and role.
2. **`sessions`**: Active authentication sessions with JWT and refresh token tracking.
3. **`devices`**: Paired user devices (Desktop Windows, Desktop macOS, Mobile Android, Mobile iOS, Web).
4. **`conversations`**: Threaded message histories.
5. **`messages`**: Multi-modal chat items with attachments and tool call associations.
6. **`agent_runs`**: Execution lifecycle tracking for user requests.
7. **`agent_steps`**: Discrete ReAct reasoning steps, thoughts, and outcomes.
8. **`tool_calls`**: Structured log of parameters, outputs, errors, and runtimes for every tool execution.
9. **`tasks`**: Asynchronous background jobs and long-running workflows.
10. **`task_events`**: Detailed timeline events emitted during task execution.
11. **`memories`**: Layer container tracking enabled states for the 4 memory tiers.
12. **`memory_items`**: Extracted facts, user habits, and semantic preferences.
13. **`automations`**: Scheduled cron routines and recurring prompt workflows.
14. **`automation_runs`**: Historical logs of automated cron executions.
15. **`files`**: Metadata tracking files stored via `FileStorageProvider`.
16. **`integrations`**: Encrypted API credentials for third-party tools.
17. **`notifications`**: In-app and push notification records.
18. **`usage_records`**: Token consumption and compute duration tracking.
19. **`audit_logs`**: Immutable security event logs.
20. **`permissions`**: Granular resource permissions and user authorization overrides.
