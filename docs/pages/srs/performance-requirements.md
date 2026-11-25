---
title: 5. Performance Requirements
---

# 5. Performance Requirements

Measured on the production server (2 vCPU, 4 GB RAM) with a catalogue of 10,000 games and 100,000 players.

## 5.1 Static Requirements

| ID | Requirement |
| --- | --- |
| PR-1 | The system shall store at least 10,000 games, 100,000 players and 1,000,000 library entries without changes to the design. |
| PR-2 | The system shall serve at least 500 concurrent client connections. |
| PR-3 | One page of a list shall contain no more than 100 items (`limit` maximum). |

## 5.2 Dynamic Requirements

| ID | Requirement |
| --- | --- |
| PR-4 | 95% of read requests (`GET`) shall complete in 300 ms or less at 100 requests per second. |
| PR-5 | 95% of write requests (`POST`, `PUT`, `DELETE`) shall complete in 500 ms or less at 20 requests per second. |
| PR-6 | Search by title (FR-3) shall complete in 500 ms or less for 95% of requests. |
| PR-7 | The share of responses with status 5xx shall not exceed 0.1% of all requests per day. |
| PR-8 | Memory use of one API instance shall stay under 512 MB under the load in PR-4. |

## 5.3 How They Are Checked

Load tests with a tool such as k6 or JMeter before each release, using the scenarios above. Response time percentiles are taken from the test report.
