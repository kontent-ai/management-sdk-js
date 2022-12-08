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
exports.ChangeWorkflowOfLanguageOrVariantQuery = void 0;
var base_query_1 = require("../base-query");
var ChangeWorkflowOfLanguageOrVariantQuery = /** @class */ (function (_super) {
    __extends(ChangeWorkflowOfLanguageOrVariantQuery, _super);
    function ChangeWorkflowOfLanguageOrVariantQuery(config, queryService, contentItemIdentifier, languageIdentifier, data) {
        var _this = _super.call(this, config, queryService) || this;
        _this.config = config;
        _this.queryService = queryService;
        _this.contentItemIdentifier = contentItemIdentifier;
        _this.languageIdentifier = languageIdentifier;
        _this.data = data;
        return _this;
    }
    ChangeWorkflowOfLanguageOrVariantQuery.prototype.toPromise = function () {
        return this.queryService.changeWorkflowOfLanguageVariantAsync(this.getUrl(), this.data, this.queryConfig);
    };
    ChangeWorkflowOfLanguageOrVariantQuery.prototype.getAction = function () {
        return this.apiEndpoints.changeWorkflowOfLanguageVariant(this.contentItemIdentifier, this.languageIdentifier);
    };
    return ChangeWorkflowOfLanguageOrVariantQuery;
}(base_query_1.BaseQuery));
exports.ChangeWorkflowOfLanguageOrVariantQuery = ChangeWorkflowOfLanguageOrVariantQuery;
