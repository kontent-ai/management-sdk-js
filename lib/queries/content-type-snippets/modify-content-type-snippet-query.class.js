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
exports.ModifyContentTypeSnippetQuery = void 0;
var base_query_1 = require("../base-query");
var ModifyContentTypeSnippetQuery = /** @class */ (function (_super) {
    __extends(ModifyContentTypeSnippetQuery, _super);
    function ModifyContentTypeSnippetQuery(config, queryService, identifier, data) {
        var _this = _super.call(this, config, queryService) || this;
        _this.config = config;
        _this.queryService = queryService;
        _this.identifier = identifier;
        _this.data = data;
        return _this;
    }
    ModifyContentTypeSnippetQuery.prototype.toPromise = function () {
        return this.queryService.modifyContentTypeSnippetAsync(this.getUrl(), this.queryConfig, this.data);
    };
    ModifyContentTypeSnippetQuery.prototype.getAction = function () {
        return this.apiEndpoints.modifyContentTypeSnippet(this.identifier);
    };
    return ModifyContentTypeSnippetQuery;
}(base_query_1.BaseQuery));
exports.ModifyContentTypeSnippetQuery = ModifyContentTypeSnippetQuery;
