---
title: 7. Non-Functional Attributes
---

# 7. Non-Functional Attributes

| ID | Attribute | Requirement | How it is verified |
| --- | --- | --- | --- |
| NFR-1 | Security | Every operation except catalogue browsing requires a valid token. Input is validated against the OpenAPI schemas before processing. | automated tests for 401 and 400 responses |
| NFR-2 | Security | Passwords and tokens never appear in logs or error messages. | log review |
| NFR-3 | Reliability | Monthly availability of the API is at least 99.5%. | uptime monitoring |
| NFR-4 | Reliability | The database is backed up daily; data can be restored with no more than 24 hours of loss. | monthly restore test |
| NFR-5 | Data integrity | A game appears in a player's library at most once; deleting a player deletes the library entries. | database constraints, tests |
| NFR-6 | Portability | The service runs in a Docker container on any Linux host with Docker. | deployment to a clean host |
| NFR-7 | Compatibility | Clients written against v1 keep working until v2 is released; fields are only added, never removed, within v1. | contract tests against `openapi.yaml` |
| NFR-8 | Reusability | The SDK is a separate npm package and can be used by any TypeScript or JavaScript client. | build of the SDK |
| NFR-9 | Scalability | API instances are stateless, so more instances can be added behind a load balancer without code changes. | load test with 2 instances |
| NFR-10 | Maintainability | Unit test coverage of business logic is at least 70%. | coverage report |
| NFR-11 | Usability for developers | Every operation in the OpenAPI document has a summary, parameter descriptions and examples. | review of the API Reference |
