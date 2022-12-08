"use strict";
exports.__esModule = true;
exports.ActionQuery = void 0;
var ActionQuery = /** @class */ (function () {
    function ActionQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * Sets action to use for request
     */
    ActionQuery.prototype.withAction = function (action) {
        return this.buildResult(this.config, this.queryService, action);
    };
    return ActionQuery;
}());
exports.ActionQuery = ActionQuery;
