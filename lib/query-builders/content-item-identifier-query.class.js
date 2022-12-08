"use strict";
exports.__esModule = true;
exports.ContentItemIdentifierQuery = void 0;
var models_1 = require("../models");
var ContentItemIdentifierQuery = /** @class */ (function () {
    function ContentItemIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using internal Id
    * @param id Internal Id of content item
    */
    ContentItemIdentifierQuery.prototype.byItemId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentItemIdentifier(models_1.Identifiers.ContentItemIdentifierEnum.InternalId, id));
    };
    /**
    * Gets query using external Id
    * @param id External Id of content item
    */
    ContentItemIdentifierQuery.prototype.byItemExternalId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentItemIdentifier(models_1.Identifiers.ContentItemIdentifierEnum.ExternalId, id));
    };
    /**
    * Gets query using codename
    * @param codename Codename of content item
    */
    ContentItemIdentifierQuery.prototype.byItemCodename = function (codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentItemIdentifier(models_1.Identifiers.ContentItemIdentifierEnum.Codename, codename));
    };
    return ContentItemIdentifierQuery;
}());
exports.ContentItemIdentifierQuery = ContentItemIdentifierQuery;
