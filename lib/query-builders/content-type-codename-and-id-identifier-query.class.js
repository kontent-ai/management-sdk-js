"use strict";
exports.__esModule = true;
exports.ContentTypeCodenameAndIdIdentifierQuery = void 0;
var models_1 = require("../models");
var ContentTypeCodenameAndIdIdentifierQuery = /** @class */ (function () {
    function ContentTypeCodenameAndIdIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets query using internal Id
    * @param id Internal Id of content item
    */
    ContentTypeCodenameAndIdIdentifierQuery.prototype.byTypeId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentTypeIdentifier(models_1.Identifiers.ContentTypeIdentifierEnum.InternalId, id));
    };
    /**
    * Gets query using codename
    * @param codename Codename of content item
    */
    ContentTypeCodenameAndIdIdentifierQuery.prototype.byTypeCodename = function (codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentTypeIdentifier(models_1.Identifiers.ContentTypeIdentifierEnum.Codename, codename));
    };
    return ContentTypeCodenameAndIdIdentifierQuery;
}());
exports.ContentTypeCodenameAndIdIdentifierQuery = ContentTypeCodenameAndIdIdentifierQuery;
