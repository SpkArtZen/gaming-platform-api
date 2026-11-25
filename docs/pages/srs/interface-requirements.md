---
title: 4. Interface Requirements
---

# 4. Interface Requirements

## 4.1 Software Interface: REST API

| Property | Requirement |
| --- | --- |
| Style | REST over HTTPS |
| Base URL | `https://api.gaming-platform.example/v1` (production), `http://localhost:3000/v1` (development) |
| Versioning | major version in the path (`/v1`); breaking changes only in a new version |
| Data format | JSON, UTF-8; dates in ISO 8601 (`2026-10-30T18:00:00Z`) |
| Identifiers | UUID |
| Lists | paginated, response shape `items` + `meta` |
| Errors | `Error` schema: `code`, `message`, `details` |
| Contract | OpenAPI 3.0.3 document `openapi.yaml` in the repository root |

The full description of every operation, parameter and response is in the [API Reference](/api).

## 4.2 Software Interface: SDK

- The TypeScript SDK `gaming-platform-sdk` is generated from `openapi.yaml` with OpenAPI Generator (`typescript-axios`).
- It exposes the classes `GamesApi` and `PlayersApi`; method names equal the `operationId` values (`listGames`, `addGameToPlayer`, …).
- The SDK shall be regenerated every time the OpenAPI document changes. Installation is described in [Installation](/installation).

## 4.3 Authorization Interface

- Clients send `Authorization: Bearer` followed by a JWT access token.
- The API verifies the token signature and expiry and reads the user identity from it.
- Details: [Authorization](/authorization).

## 4.4 Database Interface

- The API is the only component that reads or writes the database.
- Tables: `games`, `players`, `player_games` (library, unique pair of player and game).
- Database access goes through parameterized queries or an ORM; no SQL is built from user input.

## 4.5 User Interface: Documentation Site

- The documentation is a static Zudoku site on GitHub Pages.
- Top menu: Documentation, SRS, API Reference, About.
- The API Reference is generated from `openapi.yaml` and lets developers send test requests from the browser.
