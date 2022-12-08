"use strict";
exports.__esModule = true;
exports.UserIdentifierQuery = void 0;
var models_1 = require("../models");
var UserIdentifierQuery = /** @class */ (function () {
    function UserIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * Gets using email
     * @param email Email
     */
    UserIdentifierQuery.prototype.byEmail = function (email) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.UserIdentifier(models_1.Identifiers.UserIdentifierEnum.Email, email));
    };
    /**
     * Gets using internal Id
     * @param id Internal Id
     */
    UserIdentifierQuery.prototype.byId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.UserIdentifier(models_1.Identifiers.UserIdentifierEnum.Id, id));
    };
    return UserIdentifierQuery;
}());
exports.UserIdentifierQuery = UserIdentifierQuery;
