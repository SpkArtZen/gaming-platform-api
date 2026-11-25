---
title: 8. Schedule and Budget
---

# 8. Preliminary Schedule and Budget

The figures below are preliminary estimates for one developer working part time (20 hours per week).

## 8.1 Schedule

| Phase | Result | Duration | Effort |
| --- | --- | --- | --- |
| 1. Requirements | this SRS | 1 week | 15 h |
| 2. API design | OpenAPI document, SDK, documentation site | 1 week | 20 h |
| 3. Database and catalogue | FR-1 – FR-8 | 2 weeks | 40 h |
| 4. Players and libraries | FR-9 – FR-16, authorization | 2 weeks | 40 h |
| 5. Testing | unit, integration and load tests (NFR-10, PR-4 – PR-8) | 1.5 weeks | 30 h |
| 6. Deployment | container, HTTPS, monitoring, backups | 1 week | 15 h |
| **Total** | | **8.5 weeks** | **160 h** |

## 8.2 Budget

| Item | Basis | Cost |
| --- | --- | --- |
| Development | 160 h × $15 per hour (estimated junior rate) | $2,400 |
| Server | 2 vCPU / 4 GB virtual server, about $20 per month, 12 months | $240 |
| Managed database backups | about $5 per month, 12 months | $60 |
| Domain and TLS certificate | domain about $15 per year; certificate free (Let's Encrypt) | $15 |
| Documentation hosting | GitHub Pages | $0 |
| Reserve | 10% of the above | $272 |
| **Total for the first year** | | **$2,987** |

Hosting prices are typical ranges for small virtual servers and will be confirmed when a provider is chosen.
