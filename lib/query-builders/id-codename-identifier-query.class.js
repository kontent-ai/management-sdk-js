"use strict";
exports.__esModule = true;
exports.IdCodenameIdentifierQuery = void 0;
var models_1 = require("../models");
var IdCodenameIdentifierQuery = /** @class */ (function () {
    function IdCodenameIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using internal Id
    * @param id Internal Id
    */
    IdCodenameIdentifierQuery.prototype.byItemId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentItemIdentifier(models_1.Identifiers.ContentItemIdentifierEnum.InternalId, id));
    };
    /**
    * Gets query using codename
    * @param codename Codename
    */
    IdCodenameIdentifierQuery.prototype.byItemCodename = function (codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentItemIdentifier(models_1.Identifiers.ContentItemIdentifierEnum.Codename, codename));
    };
    return IdCodenameIdentifierQuery;
}());
exports.IdCodenameIdentifierQuery = IdCodenameIdentifierQuery;
