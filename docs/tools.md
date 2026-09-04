# Modular Tool Architecture & Permissions

## 1. Tool Interface Specification
Every tool conforms to the standard `ToolExecutor` contract:

```typescript
export interface ToolExecutor {
  definition: ToolDefinition;
  execute(parameters: Record<string, any>, context: ToolExecutionContext): Promise<unknown>;
}
```

## 2. Permission Levels
- `READ_ONLY`: Pure deterministic computation or data inspection. Runs automatically. (e.g. `calculator`, `datetime`).
- `LOW_RISK`: Read-only external API calls, app launching, or local screen capture.
- `USER_CONFIRMATION_REQUIRED`: Sending emails, writing files, or executing system modifications. Pauses agent execution for user approval.
- `HIGH_RISK`: Deleting files, modifying database tables, or executing arbitrary shell commands. Requires explicit interactive countdown confirmation.

## 3. Phase 0 Safe Reference Tool: `CalculatorTool`
- **Tool ID**: `calculator`
- **Permission**: `READ_ONLY`
- **Capability**: Algebraic, trigonometric, and statistical calculations with mathematical expression token sanitization.
