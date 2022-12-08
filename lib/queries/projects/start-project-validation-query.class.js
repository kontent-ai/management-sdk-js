"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.StartProjectValidationQuery = void 0;
var base_query_1 = require("../base-query");
var StartProjectValidationQuery = /** @class */ (function (_super) {
    __extends(StartProjectValidationQuery, _super);
    function StartProjectValidationQuery(config, queryService) {
        var _this = _super.call(this, config, queryService) || this;
        _this.config = config;
        _this.queryService = queryService;
        return _this;
    }
    StartProjectValidationQuery.prototype.toPromise = function () {
        return this.queryService.startProjectValidationAsync(this.getUrl(), this.queryConfig);
    };
    StartProjectValidationQuery.prototype.getAction = function () {
        return this.apiEndpoints.startProjectValidation();
    };
    return StartProjectValidationQuery;
}(base_query_1.BaseQuery));
exports.StartProjectValidationQuery = StartProjectValidationQuery;
