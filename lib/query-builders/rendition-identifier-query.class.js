"use strict";
exports.__esModule = true;
exports.RenditionIdentifierQuery = void 0;
var models_1 = require("../models");
var RenditionIdentifierQuery = /** @class */ (function () {
    function RenditionIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using internal Id
    * @param id Internal Id of content item
    */
    RenditionIdentifierQuery.prototype.byRenditionId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.RenditionIdentifier(models_1.Identifiers.RenditionIdentifierEnum.InternalId, id));
    };
    /**
    * Gets query using external Id
    * @param id External Id of content item
    */
    RenditionIdentifierQuery.prototype.byRenditionExternalId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.RenditionIdentifier(models_1.Identifiers.RenditionIdentifierEnum.ExternalId, id));
    };
    return RenditionIdentifierQuery;
}());
exports.RenditionIdentifierQuery = RenditionIdentifierQuery;
