# Gaming Platform API

REST API ігрової платформи (сутності **Game** і **Player**), описане у форматі OpenAPI 3.0.3,
згенерований TypeScript SDK і документація на Zudoku.

| Що | Де |
| --- | --- |
| OpenAPI-документ | [`openapi.yaml`](openapi.yaml) |
| SDK (TypeScript, axios) | [`sdk/`](sdk) |
| Документація Zudoku | [`docs/`](docs) |
| Опублікована документація | https://spkartzen.github.io/gaming-platform-api/ |

## Ендпоінти

| Метод | Шлях | Опис |
| --- | --- | --- |
| GET | /games | Список ігор (page, limit, genre, platform, search) |
| POST | /games | Додати гру |
| GET | /games/{gameId} | Гра за id |
| PUT | /games/{gameId} | Оновити гру |
| DELETE | /games/{gameId} | Видалити гру |
| GET | /players | Список гравців (page, limit, country) |
| POST | /players | Зареєструвати гравця |
| GET | /players/{playerId} | Гравець за id |
| PUT | /players/{playerId} | Оновити гравця |
| DELETE | /players/{playerId} | Видалити гравця |
| GET | /players/{playerId}/games | Бібліотека ігор гравця |
| POST | /players/{playerId}/games | Додати гру до бібліотеки |
| DELETE | /players/{playerId}/games/{gameId} | Видалити гру з бібліотеки |

## Генерація SDK

Потрібні Node.js 18+ і Java 11+.

```bat
generate-sdk.cmd
```

Скрипт запускає:

```bash
npx @openapitools/openapi-generator-cli generate -i openapi.yaml -g typescript-axios -o sdk \
  --additional-properties=npmName=gaming-platform-sdk,npmVersion=1.0.0,supportsES6=true,withSeparateModelsAndApi=true,apiPackage=api,modelPackage=models
```

## Використання SDK

```ts
import { Configuration, GamesApi, PlayersApi } from "gaming-platform-sdk";

const config = new Configuration({
  basePath: "http://localhost:3000/v1",
  accessToken: "<JWT>",
});

const games = new GamesApi(config);
const { data } = await games.listGames(1, 20, "RPG");
console.log(data.items.map((g) => g.title));

const players = new PlayersApi(config);
await players.addGameToPlayer("7c9e6679-7425-40de-944b-e07fc1f90ae7", {
  gameId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
});
```

## Документація

```bash
cd docs
npm install
npm run dev     # http://localhost:3000/gaming-platform-api/
```

Деплой на GitHub Pages виконує workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) після кожного push у `main`.

## Автор

Сапко Артем, група 7.F2.26, кафедра програмної інженерії, Запорізький національний університет.
GitHub: [SpkArtZen](https://github.com/SpkArtZen)
