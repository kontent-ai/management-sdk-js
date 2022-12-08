"use strict";
exports.__esModule = true;
exports.ContentTypeIdentifierQuery = void 0;
var models_1 = require("../models");
var ContentTypeIdentifierQuery = /** @class */ (function () {
    function ContentTypeIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using internal Id
    * @param id Internal Id of content item
    */
    ContentTypeIdentifierQuery.prototype.byTypeId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentTypeIdentifier(models_1.Identifiers.ContentTypeIdentifierEnum.InternalId, id));
    };
    /**
    * Gets query using external Id
    * @param id External Id of content item
    */
    ContentTypeIdentifierQuery.prototype.byTypeExternalId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentTypeIdentifier(models_1.Identifiers.ContentTypeIdentifierEnum.ExternalId, id));
    };
    /**
    * Gets query using codename
    * @param codename Codename of content item
    */
    ContentTypeIdentifierQuery.prototype.byTypeCodename = function (codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentTypeIdentifier(models_1.Identifiers.ContentTypeIdentifierEnum.Codename, codename));
    };
    return ContentTypeIdentifierQuery;
}());
exports.ContentTypeIdentifierQuery = ContentTypeIdentifierQuery;
