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
exports.AddAssetQuery = void 0;
var models_1 = require("../../models");
var base_query_1 = require("../base-query");
var AddAssetQuery = /** @class */ (function (_super) {
    __extends(AddAssetQuery, _super);
    function AddAssetQuery(config, queryService, data) {
        var _this = _super.call(this, config, queryService) || this;
        _this.config = config;
        _this.queryService = queryService;
        _this.data = data;
        return _this;
    }
    AddAssetQuery.prototype.toPromise = function () {
        return this.queryService.addAssetAsync(this.getUrl(), this.data(models_1.assetElementsBuilder), this.queryConfig);
    };
    AddAssetQuery.prototype.getAction = function () {
        return this.apiEndpoints.addAsset();
    };
    return AddAssetQuery;
}(base_query_1.BaseQuery));
exports.AddAssetQuery = AddAssetQuery;
