# Security & Trust Architecture

## 1. Authentication & Session Management
- **Password Security**: Bcrypt with 10 salted hashing rounds.
- **JWT Architecture**: Access tokens with expiration and refresh token rotation.
- **Role-Based Access Control**: `ADMIN`, `USER`, and `GUEST` scopes.

## 2. Desktop Device Trust Model
- Desktop and mobile clients must establish pairing via a unique cryptographic token (`authToken`).
- Every remote action emitted from the server to the desktop agent daemon is verified against the user ID.
- Desktop agent incorporates an **Emergency Stop Switch** that instantly interrupts any running command and rejects further execution until explicitly reset.

## 3. Sandboxing & Input Validation
- **Strict Zod DTO Validation**: All incoming requests are validated before reaching controller handlers.
- **Code Execution Isolation**: Code runner operates inside a sandboxed VM with strict memory and execution time limits.
- **Audit Logging**: Sensitive actions (file edits, permission changes, system controls) are written to an immutable `audit_logs` table.
