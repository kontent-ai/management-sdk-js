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
exports.ListCollectionsQuery = void 0;
var base_query_1 = require("../base-query");
var ListCollectionsQuery = /** @class */ (function (_super) {
    __extends(ListCollectionsQuery, _super);
    function ListCollectionsQuery(config, queryService) {
        var _this = _super.call(this, config, queryService) || this;
        _this.config = config;
        _this.queryService = queryService;
        return _this;
    }
    ListCollectionsQuery.prototype.toPromise = function () {
        return this.queryService.listCollectionsAsync(this.getUrl(), this.queryConfig);
    };
    ListCollectionsQuery.prototype.getAction = function () {
        return this.apiEndpoints.listCollections();
    };
    return ListCollectionsQuery;
}(base_query_1.BaseQuery));
exports.ListCollectionsQuery = ListCollectionsQuery;
