# Repository Architecture

## Architecture goal

The project uses a monorepo so the client, server, tests, and documentation can evolve together while keeping clear ownership boundaries.

```text
rabtech-task2/
├── client/                 # Browser/UI boundary
│   ├── index.html
│   └── README.md
├── server/                 # API/server boundary
│   ├── index.js
│   └── README.md
├── docs/
│   ├── accessibility-audit.md
│   ├── architecture.md
│   └── keyboard-test.md
├── tests/
│   └── README.md
├── evidence/
│   └── README.md
├── .gitignore
└── README.md
```

## Boundary rules

### Client

Owns:
- UI rendering
- accessibility semantics
- keyboard interaction
- API consumption
- client-side validation

Must not:
- access server secrets
- contain database credentials
- implement privileged business rules

### Server

Owns:
- API endpoints
- validation
- business rules
- authentication/authorisation boundary
- future database access

Must not:
- depend on browser-only APIs
- expose secrets to the client

### Docs

Owns:
- architecture decisions
- audit findings
- setup and operational documentation

### Tests

Owns:
- client acceptance tests
- API tests
- accessibility regression checks

## First vertical feature slice

**Feature:** Public service directory.

Flow:

```text
User
  ↓
Client service list
  ↓ GET /api/services
Server API
  ↓
Service data
  ↓
Client renders accessible service cards
```

Example API response:

```json
{
  "services": [
    {
      "id": "resident-certificate",
      "name": "Resident Certificate",
      "department": "Revenue & Disaster Management",
      "status": "available"
    }
  ]
}
```

## Local setup

### Client

```bash
cd client
python -m http.server 5173
```

### Server

```bash
cd server
python -m http.server 3000
```

For a production implementation, replace the static server skeleton with the selected Node.js framework and connect the client through a documented API contract.

## Future evolution

A production version can grow into:

```text
client/
  components/
  pages/
  services/
  accessibility/

server/
  routes/
  controllers/
  services/
  repositories/
  middleware/

tests/
  unit/
  integration/
  accessibility/
```
