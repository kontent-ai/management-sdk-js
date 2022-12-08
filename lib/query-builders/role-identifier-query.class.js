"use strict";
exports.__esModule = true;
exports.RoleIdentifierQuery = void 0;
var models_1 = require("../models");
var RoleIdentifierQuery = /** @class */ (function () {
    function RoleIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * Id
     * @param id Internal Id
     */
    RoleIdentifierQuery.prototype.byId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.RoleIdentifier(models_1.Identifiers.RoleIdentifierEnum.Id, id));
    };
    /**
     * Codename
     * @param codename Codename
     */
    RoleIdentifierQuery.prototype.byCodename = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.RoleIdentifier(models_1.Identifiers.RoleIdentifierEnum.Codename, id));
    };
    return RoleIdentifierQuery;
}());
exports.RoleIdentifierQuery = RoleIdentifierQuery;
