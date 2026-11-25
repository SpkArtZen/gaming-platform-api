---
title: 1. Introduction
---

# 1. Introduction

**Software Requirements Specification — Gaming Platform API**
Version 1.0 · November 2026 · Author: Artem Sapko, group 7.F2.26, Zaporizhzhia National University

## 1.1 Purpose of this Document

This document specifies the requirements for the **Gaming Platform API**, a REST service that stores a catalogue of video games, registers players and manages each player's game library.

It serves two goals:

- an agreement between the customer and the developer on what the system must do;
- a reference for design, implementation and testing. Every requirement has an identifier (FR-x, NFR-x) so that it can be traced to an API operation and to a test.

Intended readers: the customer (the course supervisor), the developer, testers and the developers of client applications that will use the API.

## 1.2 Scope of this Document

The product is a backend API. It covers:

- the game catalogue: browsing, searching, filtering, and adding, editing and deleting games;
- player accounts: registration, profile editing, deletion;
- player libraries: adding a game to a library, listing the library, removing a game;
- access control with JWT bearer tokens;
- developer materials: the OpenAPI 3.0.3 specification, a generated TypeScript SDK and this online documentation.

Out of scope: payments, game downloads, multiplayer services, chat, and the graphical client applications themselves.

Value for the customer: one documented API that any web or mobile client can use, with a ready-made SDK. Expected development effort and cost are given in [8. Schedule and Budget](/srs/schedule-budget).

## 1.3 Overview

The system is a stateless REST service that exchanges JSON over HTTPS. Clients call it directly or through the TypeScript SDK `gaming-platform-sdk`. Data is kept in a relational database.

The rest of this document follows the structure below. The table also shows which SRS elements apply to this project (task item 2).

| Section | Used | What it contains for this project |
| --- | --- | --- |
| [1. Introduction](/srs/introduction) | yes | purpose, scope, overview |
| [2. General Description](/srs/general-description) | yes | product perspective, users, functions, assumptions |
| [3. Functional Requirements](/srs/functional-requirements) | yes | FR-1 … FR-16 with priorities, mapped to API operations |
| [4. Interface Requirements](/srs/interface-requirements) | yes | REST API, SDK, database, documentation site |
| [5. Performance Requirements](/srs/performance-requirements) | yes | response time, throughput, data volume |
| [6. Design Constraints](/srs/design-constraints) | yes | standards, technology stack, security policy |
| [7. Non-Functional Attributes](/srs/non-functional-attributes) | yes | security, reliability, portability, scalability and others |
| [8. Schedule and Budget](/srs/schedule-budget) | yes | phases, effort, hosting cost |
| [9. Appendices](/srs/appendices) | yes | glossary, acronyms, references |
