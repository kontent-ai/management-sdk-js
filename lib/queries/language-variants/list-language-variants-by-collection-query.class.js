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
exports.ListLanguageVariantsByCollectionQuery = void 0;
var responses_1 = require("../../responses");
var base_listing_query_1 = require("../base-listing-query");
var ListLanguageVariantsByCollectionQuery = /** @class */ (function (_super) {
    __extends(ListLanguageVariantsByCollectionQuery, _super);
    function ListLanguageVariantsByCollectionQuery(config, queryService, identifier) {
        var _this = _super.call(this, config, queryService) || this;
        _this.config = config;
        _this.queryService = queryService;
        _this.identifier = identifier;
        return _this;
    }
    ListLanguageVariantsByCollectionQuery.prototype.toPromise = function () {
        return this.queryService.listLanguageVariantsByCollectionAsync(this.getUrl(), this.queryConfig);
    };
    ListLanguageVariantsByCollectionQuery.prototype.getAction = function () {
        return this.apiEndpoints.listLanguageVariantsByCollection(this.identifier);
    };
    ListLanguageVariantsByCollectionQuery.prototype.allResponseFactory = function (items, responses) {
        return new responses_1.LanguageVariantResponses.ListAllLanguageVariantsByCollectionResponse({
            items: items,
            responses: responses
        });
    };
    return ListLanguageVariantsByCollectionQuery;
}(base_listing_query_1.BaseListingQuery));
exports.ListLanguageVariantsByCollectionQuery = ListLanguageVariantsByCollectionQuery;
