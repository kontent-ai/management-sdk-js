"use strict";
exports.__esModule = true;
exports.IdIdentifierQuery = void 0;
var models_1 = require("../models");
var IdIdentifierQuery = /** @class */ (function () {
    function IdIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using internal Id
    * @param id Internal Id
    */
    IdIdentifierQuery.prototype.byItemId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentItemIdentifier(models_1.Identifiers.ContentItemIdentifierEnum.InternalId, id));
    };
    /**
    * Gets query using external Id
    * @param externalId External Id
    */
    IdIdentifierQuery.prototype.byItemExternalId = function (externalId) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentItemIdentifier(models_1.Identifiers.ContentItemIdentifierEnum.ExternalId, externalId));
    };
    return IdIdentifierQuery;
}());
exports.IdIdentifierQuery = IdIdentifierQuery;
