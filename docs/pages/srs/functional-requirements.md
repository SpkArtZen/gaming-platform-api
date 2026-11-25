---
title: 3. Functional Requirements
---

# 3. Functional Requirements

Priorities: **High** — required for the first release; **Medium** — required, but can follow shortly after; **Low** — desirable.
Each requirement is implemented by the API operation in the last column (see [API Reference](/api)).

## 3.1 Game Catalogue

| ID | Requirement | Priority | API operation |
| --- | --- | --- | --- |
| FR-1 | The system shall return the catalogue page by page. Input: `page` (1 or more, default 1), `limit` (1–100, default 20). Output: list of games and `meta` with `page`, `limit`, `total`. | High | `GET /games` |
| FR-2 | The system shall filter the catalogue by `genre` (one of 9 genres) and by `platform` (one of 5 platforms). | High | `GET /games` |
| FR-3 | The system shall search games by part of the title, ignoring letter case. | Medium | `GET /games?search=` |
| FR-4 | The system shall return one game by its identifier, or 404 if it does not exist. | High | `GET /games/{gameId}` |
| FR-5 | An authorized user shall be able to add a game with title (1–200 characters), genre, developer, release date, price (0 or more, USD) and at least one platform. The response is 201 with the created game and a `Location` header. | High | `POST /games` |
| FR-6 | An authorized user shall be able to replace the data of a game. | Medium | `PUT /games/{gameId}` |
| FR-7 | An authorized user shall be able to delete a game. The response is 204. | Medium | `DELETE /games/{gameId}` |
| FR-8 | The system shall calculate the game rating (0–5) itself; clients cannot set it. | Low | read-only field `rating` |

Catalogue browsing (FR-1 – FR-4) is public. All other operations require a token.

## 3.2 Players

| ID | Requirement | Priority | API operation |
| --- | --- | --- | --- |
| FR-9 | The system shall register a player with a username (3–32 characters: letters, digits, underscore), an e-mail and an optional two-letter country code (ISO 3166-1). | High | `POST /players` |
| FR-10 | The system shall reject registration with an e-mail or username that is already taken (409). | High | `POST /players` |
| FR-11 | The system shall return the list of players page by page, with an optional filter by country. | Medium | `GET /players` |
| FR-12 | The system shall return, update and delete a player by identifier. | High | `GET`, `PUT`, `DELETE /players/{playerId}` |
| FR-13 | The system shall keep the player's level and experience points; clients cannot change them directly. | Low | read-only fields |

## 3.3 Player Library

| ID | Requirement | Priority | API operation |
| --- | --- | --- | --- |
| FR-14 | The system shall return all games in a player's library. | High | `GET /players/{playerId}/games` |
| FR-15 | The system shall add a game to a player's library. A game can be in a library only once (409 on repeat); an unknown game or player gives 404. | High | `POST /players/{playerId}/games` |
| FR-16 | The system shall remove a game from a player's library. The response is 204. | Medium | `DELETE /players/{playerId}/games/{gameId}` |

## 3.4 Validation and Errors

- Every invalid request shall be rejected with **400** and a body `code`, `message`, `details` listing each failed rule.
- A missing or invalid token shall give **401**; an unknown resource **404**; a uniqueness conflict **409**.
- Error bodies follow the `Error` schema of the OpenAPI document.
