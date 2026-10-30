---
title: Installation
---

# Installation

Для роботи з Gaming Platform API використовуйте TypeScript SDK `gaming-platform-sdk`.
Його згенеровано з OpenAPI-документа утилітою OpenAPI Generator (генератор `typescript-axios`).
Вихідний код SDK лежить у папці `sdk/` репозиторію
[SpkArtZen/gaming-platform-api](https://github.com/SpkArtZen/gaming-platform-api).

## Вимоги

- Node.js 18 або новіший
- npm 9 або новіший

## Встановлення SDK

Склонуйте репозиторій і зберіть SDK:

```bash
git clone https://github.com/SpkArtZen/gaming-platform-api.git
cd gaming-platform-api/sdk
npm install
npm run build
```

Підключіть SDK до свого проєкту як локальну залежність:

```bash
cd my-app
npm install ../gaming-platform-api/sdk
```

## Повторна генерація SDK

Якщо OpenAPI-документ змінився, згенеруйте SDK заново (потрібна Java 11+):

```bash
npx @openapitools/openapi-generator-cli generate \
  -i openapi.yaml \
  -g typescript-axios \
  -o sdk \
  --additional-properties=npmName=gaming-platform-sdk,npmVersion=1.0.0,supportsES6=true,withSeparateModelsAndApi=true,apiPackage=api,modelPackage=models
```

## Сервери

| Середовище | Base URL |
| --- | --- |
| Production | `https://api.gaming-platform.example/v1` |
| Локальна розробка | `http://localhost:3000/v1` |

## Перший запит

Перегляд каталогу ігор не потребує авторизації:

```ts
import { Configuration, GamesApi } from "gaming-platform-sdk";

const games = new GamesApi(
  new Configuration({ basePath: "http://localhost:3000/v1" }),
);

// page = 1, limit = 20, genre = "RPG"
const { data } = await games.listGames(1, 20, "RPG");
console.log(data.meta.total, data.items.map((g) => g.title));
```

Для решти операцій потрібен токен — див. [Authorization](/authorization).
