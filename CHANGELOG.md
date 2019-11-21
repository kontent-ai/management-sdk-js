# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.2.6](https://github.com///compare/v0.2.5...v0.2.6) (2019-11-21)


### Bug Fixes

* uses reference contract instead of reference object ([5df58b1](https://github.com///commit/5df58b17a196d09c20584207d4ec17455e8f4b86))

### [0.2.5](https://github.com///compare/v0.2.4...v0.2.5) (2019-11-20)


### Bug Fixes

* updates @kentico/kontent-core dep which removes testing warn logging in console ([cf38dbe](https://github.com///commit/cf38dbe307beeaefe5d3e4a96ab3d4ec2aaf0fe3))

### [0.2.4](https://github.com///compare/v0.2.3...v0.2.4) (2019-11-13)


### Features

* adds codename property to 'addContentType' and 'addContentTypeSnippet' queries, adds 'content_groups' property to 'addContentType' ([bec6a8c](https://github.com///commit/bec6a8c9b64da104d2066ef10451b549caea87ac))

### [0.2.3](https://github.com///compare/v0.2.2...v0.2.3) (2019-11-13)


### Features

* adds 'isDeveloperMode' client configuration option. If this option is enabled, additional errors are logged in console. ([7d64864](https://github.com///commit/7d648648f467e0f356e073e134910c7dd7ebea4c))
* adds optional data query builder class and uses it for 'publishOrScheduleLanguageVariant' method to allow for skipping data. Fixes https://github.com/Kentico/kontent-management-sdk-js/issues/5 ([e5cb868](https://github.com///commit/e5cb868689b0c9699b344c6ae316d644d9f47ce0))
* adds support for pagination with x-continuation header token, adds ability to set headers in query config, internally refactors the way headers are retrieved, changes debug response type to include strongly typed properties ([7efafc0](https://github.com///commit/7efafc002dbfba00f218b39377c82b6233b833a4))
* internal - separates query builders from queries ([513d058](https://github.com///commit/513d05848990b5fbf10b34f0c02750447110ba2e))


### Bug Fixes

* removes the ability to set entire query config to prevent overriding headers ([8115e2a](https://github.com///commit/8115e2a4037c0d1f45d289458fb825be80fccc23))
* sets correct data model for modifying language (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/7) ([ae740e4](https://github.com///commit/ae740e4af92efe1f3ab9897a0cb7236d4a33334d))

### [0.2.2](https://github.com///compare/v0.2.1...v0.2.2) (2019-11-05)


### Features

* adds elements builder for add content type snippet query ([74249a9](https://github.com///commit/74249a9b3f2f7d129cfead97c2f39610b8ae6584))
* adds elements builder with models for convenient creation of new content types ([6b0128e](https://github.com///commit/6b0128ea5482e23cf310c6c1743e4f7062b226b6))


### Bug Fixes

* updates kontent-core package which fixes http retry requests ([5545f10](https://github.com///commit/5545f10f663287a5cea1aff8a87864d250d5bc6e))

### [0.2.1](https://github.com///compare/v0.2.0...v0.2.1) (2019-10-31)


### Bug Fixes

* Fixes modifyLanguage request type (https://github.com/Kentico/kontent-management-sdk-js/issues/3) ([cc989ce](https://github.com///commit/cc989cefb26ddd45324e15710dfd5a02a76b0166))
* Updates kontent-core package which fixes patch requests incorrectly using put callback ([e9faa5d](https://github.com///commit/e9faa5d8d4f1b8293fc01b9d809458c12964f498))

## 0.2.0 (2019-10-25)


### ⚠ BREAKING CHANGES

* implements 'modifyContentType' endpoint, uses new retry policy & uses standard versioning

### Features

* implements 'modifyContentType' endpoint, uses new retry policy & uses standard versioning ([75a9e74](https://github.com///commit/75a9e7439b6f87fe71cd6118ec7eb4e57099c210))
