"use strict";
exports.__esModule = true;
exports.ContentItemExternalIdIdentifierQuery = void 0;
var models_1 = require("../models");
var ContentItemExternalIdIdentifierQuery = /** @class */ (function () {
    function ContentItemExternalIdIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    ContentItemExternalIdIdentifierQuery.prototype.byItemExternalId = function (externalId) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentItemIdentifier(models_1.Identifiers.ContentItemIdentifierEnum.ExternalId, externalId));
    };
    return ContentItemExternalIdIdentifierQuery;
}());
exports.ContentItemExternalIdIdentifierQuery = ContentItemExternalIdIdentifierQuery;
