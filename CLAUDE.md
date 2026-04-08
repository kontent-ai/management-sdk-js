# CLAUDE.md

## Overview

Official Kontent.ai Management SDK for JavaScript/TypeScript. Wraps the Kontent.ai Management API with typed models, query builders, and response mappers.

## Development Commands

```bash
# Build (CommonJS only, fastest for verification)
npm run build:commonjs

# Build all targets (UMD, ES6, ESNext, CommonJS)
npm run build:all

# Run browser tests (Karma + Jasmine)
npm run test:browser

# Run all tests (Node + browser)
npm run test:all

# Lint
npm run lint:check
```

## Project Structure

- `lib/` - Source code
  - `client/` - `ManagementClient` class and interface
  - `contracts/` - Raw API contract interfaces (request/response shapes)
  - `models/` - Typed models and enums
  - `queries/` - Query classes per endpoint
  - `query-builders/` - Base query builder (`DataQuery`, etc.)
  - `services/` - `ManagementQueryService` (HTTP layer)
  - `mappers/` - Response contract-to-model mappers
  - `responses/` - Response wrapper classes
  - `sdk-info.generated.ts` - Auto-generated, do not edit manually
- `test/browser/` - Jasmine specs with fake JSON responses
  - `fake-responses/` - Static JSON fixtures

## Key Patterns

- **Query flow**: `ManagementClient` method -> `DataQuery.withData()` -> specific `Query` class -> `ManagementQueryService` async method -> mapper -> typed response
- **Filter data is passed through as-is**: The `IFilterItemsWithVariantsData` interface is serialized directly as the POST body. No intermediate mapping - the interface shape must match the API contract exactly.
- **Tests use fake JSON**: Each spec imports a static JSON fixture from `test/browser/fake-responses/` and creates a test client via `getTestClientWithJson()`.

## Versioning

Uses [standard-version](https://github.com/conventional-changelog/standard-version) for releases. Do not manually edit `package.json` version, `CHANGELOG.md`, or `sdk-info.generated.ts` — the release scripts handle all of it:

```bash
npm run release:minor   # feat commits -> minor bump (e.g. 8.4.0 -> 8.5.0)
npm run release:patch   # fix commits -> patch bump
npm run release:major   # breaking changes -> major bump
```

These scripts automatically: bump version in `package.json`/`package-lock.json`, generate changelog from conventional commits, run `set-sdk-version` to regenerate `sdk-info.generated.ts`, create a commit, and tag the release. Commit the feature first, then run the release script.

