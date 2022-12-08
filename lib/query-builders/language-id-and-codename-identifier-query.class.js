"use strict";
exports.__esModule = true;
exports.LanguageIdAndCodenameIdentifierQuery = void 0;
var models_1 = require("../models");
var LanguageIdAndCodenameIdentifierQuery = /** @class */ (function () {
    function LanguageIdAndCodenameIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using internal Id
    * @param id Internal Id
    */
    LanguageIdAndCodenameIdentifierQuery.prototype.byLanguageId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.LanguageIdentifier(models_1.Identifiers.LanguageIdentifierEnum.InternalId, id));
    };
    /**
    * Gets query using codename
    * @param codename Codename
    */
    LanguageIdAndCodenameIdentifierQuery.prototype.byLanguageCodename = function (codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.LanguageIdentifier(models_1.Identifiers.LanguageIdentifierEnum.Codename, codename));
    };
    return LanguageIdAndCodenameIdentifierQuery;
}());
exports.LanguageIdAndCodenameIdentifierQuery = LanguageIdAndCodenameIdentifierQuery;
