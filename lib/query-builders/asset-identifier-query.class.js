"use strict";
exports.__esModule = true;
exports.AssetIdentifierQuery = void 0;
var models_1 = require("../models");
var AssetIdentifierQuery = /** @class */ (function () {
    function AssetIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using internal Id
    * @param id Internal Id of content item
    */
    AssetIdentifierQuery.prototype.byAssetId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.AssetIdentifier(models_1.Identifiers.AssetIdentifierEnum.InternalId, id));
    };
    /**
    * Gets query using external Id
    * @param id External Id of content item
    */
    AssetIdentifierQuery.prototype.byAssetExternalId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.AssetIdentifier(models_1.Identifiers.AssetIdentifierEnum.ExternalId, id));
    };
    return AssetIdentifierQuery;
}());
exports.AssetIdentifierQuery = AssetIdentifierQuery;
