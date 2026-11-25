---
title: 9. Appendices
---

# 9. Appendices

## 9.1 Definitions

| Term | Meaning |
| --- | --- |
| Catalogue | the list of all games available on the platform |
| Library | the set of games that belong to one player |
| Player | a registered user of the platform |
| Catalogue manager | a staff user who may add, change and delete games |
| Access token | a signed string that proves who the user is |

## 9.2 Acronyms and Abbreviations

| Acronym | Full form |
| --- | --- |
| API | Application Programming Interface |
| CRUD | Create, Read, Update, Delete |
| FR / NFR | Functional / Non-Functional Requirement |
| GDPR | General Data Protection Regulation |
| HTTPS | Hypertext Transfer Protocol Secure |
| JSON | JavaScript Object Notation |
| JWT | JSON Web Token |
| REST | Representational State Transfer |
| SDK | Software Development Kit |
| SRS | Software Requirements Specification |
| UUID | Universally Unique Identifier |

## 9.3 Traceability

| Requirement group | API operations | Documentation |
| --- | --- | --- |
| FR-1 – FR-8 | `/games`, `/games/{gameId}` | [API Reference](/api) |
| FR-9 – FR-13 | `/players`, `/players/{playerId}` | [API Reference](/api) |
| FR-14 – FR-16 | `/players/{playerId}/games` | [API Reference](/api) |
| NFR-1, DC-3 | security scheme `bearerAuth` | [Authorization](/authorization) |
| NFR-8, DC-7 | SDK `gaming-platform-sdk` | [Installation](/installation) |

## 9.4 References

1. [Software Requirement Specification (SRS) Format — GeeksforGeeks](https://www.geeksforgeeks.org/software-engineering/software-requirement-specification-srs-format/)
2. IEEE Std 830-1998, Recommended Practice for Software Requirements Specifications
3. [OpenAPI Specification 3.0.3](https://spec.openapis.org/oas/v3.0.3)
4. [Zudoku documentation](https://zudoku.dev/docs)
5. [Repository SpkArtZen/gaming-platform-api](https://github.com/SpkArtZen/gaming-platform-api)
