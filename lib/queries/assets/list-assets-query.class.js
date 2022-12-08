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
exports.ListAssetsQuery = void 0;
var responses_1 = require("../../responses");
var base_listing_query_1 = require("../base-listing-query");
var ListAssetsQuery = /** @class */ (function (_super) {
    __extends(ListAssetsQuery, _super);
    function ListAssetsQuery(config, queryService) {
        var _this = _super.call(this, config, queryService) || this;
        _this.config = config;
        _this.queryService = queryService;
        return _this;
    }
    ListAssetsQuery.prototype.toPromise = function () {
        return this.queryService.listAssetsAsync(this.getUrl(), this.queryConfig);
    };
    ListAssetsQuery.prototype.getAction = function () {
        return this.apiEndpoints.listAssets();
    };
    ListAssetsQuery.prototype.allResponseFactory = function (items, responses) {
        return new responses_1.AssetResponses.AssetsListAllResponse({
            items: items,
            responses: responses
        });
    };
    return ListAssetsQuery;
}(base_listing_query_1.BaseListingQuery));
exports.ListAssetsQuery = ListAssetsQuery;
