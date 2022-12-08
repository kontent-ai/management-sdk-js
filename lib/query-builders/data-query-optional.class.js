"use strict";
exports.__esModule = true;
exports.DataQueryOptional = void 0;
var DataQueryOptional = /** @class */ (function () {
    function DataQueryOptional(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * Gets query without data
     */
    DataQueryOptional.prototype.withoutData = function () {
        return this.buildResult(this.config, this.queryService, undefined);
    };
    /**
     * Gets query with data
     * @param data Data for query
     */
    DataQueryOptional.prototype.withData = function (data) {
        return this.buildResult(this.config, this.queryService, data);
    };
    return DataQueryOptional;
}());
exports.DataQueryOptional = DataQueryOptional;
