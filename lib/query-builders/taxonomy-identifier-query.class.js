"use strict";
exports.__esModule = true;
exports.TaxonomyIdentifierQuery = void 0;
var models_1 = require("../models");
var TaxonomyIdentifierQuery = /** @class */ (function () {
    function TaxonomyIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using internal Id
    * @param id Internal Id of content item
    */
    TaxonomyIdentifierQuery.prototype.byTaxonomyId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.TaxonomyIdentifier(models_1.Identifiers.TaxonomyIdentifierEnum.InternalId, id));
    };
    /**
    * Gets query using external Id
    * @param id External Id of content item
    */
    TaxonomyIdentifierQuery.prototype.byTaxonomyExternalId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.TaxonomyIdentifier(models_1.Identifiers.TaxonomyIdentifierEnum.ExternalId, id));
    };
    /**
    * Gets query using codename
    * @param codename Codename of content item
    */
    TaxonomyIdentifierQuery.prototype.byTaxonomyCodename = function (codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.TaxonomyIdentifier(models_1.Identifiers.TaxonomyIdentifierEnum.Codename, codename));
    };
    return TaxonomyIdentifierQuery;
}());
exports.TaxonomyIdentifierQuery = TaxonomyIdentifierQuery;
