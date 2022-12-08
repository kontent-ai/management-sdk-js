"use strict";
exports.__esModule = true;
exports.TaskIdentifierQuery = void 0;
var models_1 = require("../models");
var TaskIdentifierQuery = /** @class */ (function () {
    function TaskIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * Query by task Id
     * @param id Task id
     */
    TaskIdentifierQuery.prototype.byTaskId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.TaskIdentifier(models_1.Identifiers.TaskIdentifierEnum.InternalId, id));
    };
    return TaskIdentifierQuery;
}());
exports.TaskIdentifierQuery = TaskIdentifierQuery;
