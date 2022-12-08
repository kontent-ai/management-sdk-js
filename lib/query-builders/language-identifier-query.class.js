"use strict";
exports.__esModule = true;
exports.LanguageIdentifierQuery = void 0;
var models_1 = require("../models");
var LanguageIdentifierQuery = /** @class */ (function () {
    function LanguageIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using external Id
    * @param externalId Internal Id
    */
    LanguageIdentifierQuery.prototype.byExternalId = function (externalId) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.LanguageIdentifier(models_1.Identifiers.LanguageIdentifierEnum.ExternalId, externalId));
    };
    /**
    * Gets using internal Id
    * @param id Internal Id
    */
    LanguageIdentifierQuery.prototype.byLanguageId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.LanguageIdentifier(models_1.Identifiers.LanguageIdentifierEnum.InternalId, id));
    };
    /**
    * Gets query using codename
    * @param codename Codename
    */
    LanguageIdentifierQuery.prototype.byLanguageCodename = function (codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.LanguageIdentifier(models_1.Identifiers.LanguageIdentifierEnum.Codename, codename));
    };
    return LanguageIdentifierQuery;
}());
exports.LanguageIdentifierQuery = LanguageIdentifierQuery;
