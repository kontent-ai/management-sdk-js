"use strict";
exports.__esModule = true;
exports.CollectionIdentifierQuery = void 0;
var models_1 = require("../models");
var CollectionIdentifierQuery = /** @class */ (function () {
    function CollectionIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using internal Id
    * @param id Internal Id of collection
    */
    CollectionIdentifierQuery.prototype.byCollectionId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.CollectionIdentifier(models_1.Identifiers.CollectionIdentifierEnum.InternalId, id));
    };
    /**
    * Gets query using external Id
    * @param id External Id of collection
    */
    CollectionIdentifierQuery.prototype.byCollectionExternalId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.CollectionIdentifier(models_1.Identifiers.CollectionIdentifierEnum.ExternalId, id));
    };
    /**
    * Gets query using codename
    * @param codename Codename of collection
    */
    CollectionIdentifierQuery.prototype.byCollectionCodename = function (codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.CollectionIdentifier(models_1.Identifiers.CollectionIdentifierEnum.Codename, codename));
    };
    return CollectionIdentifierQuery;
}());
exports.CollectionIdentifierQuery = CollectionIdentifierQuery;
