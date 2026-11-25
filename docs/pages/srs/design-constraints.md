---
title: 6. Design Constraints
---

# 6. Design Constraints

## 6.1 Standards

| ID | Constraint |
| --- | --- |
| DC-1 | The API contract shall be described in OpenAPI 3.0.3 and kept in the repository. Code, SDK and documentation follow this document. |
| DC-2 | HTTP methods and status codes shall follow RFC 9110 (GET is safe, PUT and DELETE are idempotent). |
| DC-3 | Access tokens shall be JWT (RFC 7519) sent as Bearer tokens (RFC 6750). |
| DC-4 | Country codes shall use ISO 3166-1 alpha-2; dates shall use ISO 8601. |

## 6.2 Technology

| ID | Constraint |
| --- | --- |
| DC-5 | Backend: Node.js 22 LTS with TypeScript. |
| DC-6 | Database: PostgreSQL 16. |
| DC-7 | SDK: generated with OpenAPI Generator; manual changes to generated code are not allowed. |
| DC-8 | Documentation: Zudoku, deployed to GitHub Pages by GitHub Actions. |
| DC-9 | Source code is hosted on GitHub; the `main` branch is always deployable. |

## 6.3 Security and Policy

| ID | Constraint |
| --- | --- |
| DC-10 | Production traffic only over HTTPS (TLS 1.2 or newer). |
| DC-11 | Secrets (database password, token keys) are passed through environment variables and never stored in the repository. |
| DC-12 | Personal data (e-mail) is processed according to GDPR principles: it is used only for the account and deleted with the player (FR-12). |

## 6.4 Hardware Limits

The first release must run on a single server with 2 vCPU and 4 GB RAM (see [5. Performance Requirements](/srs/performance-requirements)).
