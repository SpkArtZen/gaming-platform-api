---
title: About
---

# About Gaming Platform API

**Gaming Platform API** (версія 1.0.0, OpenAPI 3.0.3) — REST API ігрової платформи
для керування каталогом ігор, гравцями та бібліотеками ігор гравців.

## Сутності

| Сутність | Опис | Основні поля |
| --- | --- | --- |
| Game | Гра в каталозі платформи | id, title, description, genre, developer, releaseDate, price, platforms, rating |
| Player | Зареєстрований гравець | id, username, email, country, level, experience, gameIds |

Зв'язок: гравець має бібліотеку ігор (багато-до-багатьох між Player і Game).

## Ресурси

| Ресурс | Операції |
| --- | --- |
| `/games` | список з фільтрами, створення |
| `/games/{gameId}` | отримання, оновлення, видалення |
| `/players` | список з фільтром за країною, реєстрація |
| `/players/{playerId}` | отримання, оновлення, видалення |
| `/players/{playerId}/games` | бібліотека гравця, додавання гри |
| `/players/{playerId}/games/{gameId}` | видалення гри з бібліотеки |

## Статус-коди

| Код | Значення |
| --- | --- |
| 200 | Успішне отримання або оновлення |
| 201 | Ресурс створено |
| 204 | Ресурс видалено |
| 400 | Помилка валідації |
| 401 | Немає або недійсний токен |
| 404 | Ресурс не знайдено |
| 409 | Конфлікт (наприклад, email уже зайнятий) |

## Посилання

- OpenAPI-документ: [openapi.yaml](https://github.com/SpkArtZen/gaming-platform-api/blob/main/openapi.yaml)
- SDK: [sdk/](https://github.com/SpkArtZen/gaming-platform-api/tree/main/sdk)
- Повний опис операцій: [API Reference](/api)
- Ліцензія: MIT
