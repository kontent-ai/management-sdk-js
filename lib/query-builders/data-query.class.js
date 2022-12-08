"use strict";
exports.__esModule = true;
exports.DataQuery = void 0;
var DataQuery = /** @class */ (function () {
    function DataQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * Gets query with data
     * @param data Data for query
     */
    DataQuery.prototype.withData = function (data) {
        return this.buildResult(this.config, this.queryService, data);
    };
    return DataQuery;
}());
exports.DataQuery = DataQuery;
