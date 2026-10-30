---
title: Authorization
---

# Authorization

API використовує схему безпеки **bearerAuth** (HTTP Bearer, формат токена JWT),
описану в розділі `components.securitySchemes` OpenAPI-документа.

## Які операції потребують токена

| Операція | Токен |
| --- | --- |
| `GET /games`, `GET /games/{gameId}` | не потрібен |
| Створення, оновлення, видалення ігор | потрібен |
| Усі операції з `/players` | потрібен |

## Передача токена

Токен передається в заголовку `Authorization`:

```http
GET /v1/players/7c9e6679-7425-40de-944b-e07fc1f90ae7 HTTP/1.1
Host: api.gaming-platform.example
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Приклад з curl:

```bash
curl -H "Authorization: Bearer $TOKEN" \
  http://localhost:3000/v1/players
```

## Токен у SDK

У SDK токен задається полем `accessToken` об'єкта `Configuration`.
SDK сам додає заголовок `Authorization: Bearer ...` до кожного захищеного запиту.

```ts
import { Configuration, PlayersApi } from "gaming-platform-sdk";

const config = new Configuration({
  basePath: "http://localhost:3000/v1",
  accessToken: process.env.GAMING_API_TOKEN,
});

const players = new PlayersApi(config);
const { data } = await players.getPlayer("7c9e6679-7425-40de-944b-e07fc1f90ae7");
console.log(data.username, data.level);
```

## Помилки авторизації

Якщо токен відсутній або недійсний, API повертає `401 Unauthorized`:

```json
{ "code": 401, "message": "Unauthorized" }
```

## Перевірка в API Reference

На сторінці [API Reference](/api) натисніть **Authorize**, вставте токен,
і інтерактивна консоль додаватиме його до тестових запитів.
