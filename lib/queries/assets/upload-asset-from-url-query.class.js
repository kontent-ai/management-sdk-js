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
exports.UploadAssetFromUrlQuery = void 0;
var base_query_1 = require("../base-query");
var UploadAssetFromUrlQuery = /** @class */ (function (_super) {
    __extends(UploadAssetFromUrlQuery, _super);
    function UploadAssetFromUrlQuery(config, queryService, data) {
        var _this = _super.call(this, config, queryService) || this;
        _this.config = config;
        _this.queryService = queryService;
        _this.data = data;
        _this.withUrl('none'); // do not set url as there are multiple endpoints used
        return _this;
    }
    UploadAssetFromUrlQuery.prototype.toPromise = function () {
        return this.queryService.uploadAssetFromUrlAsync(this.getUploadBinaryFileUrl(), this.getAddAssetUrl(), this.data, this.queryConfig);
    };
    UploadAssetFromUrlQuery.prototype.getAddAssetUrl = function () {
        return _super.prototype.getUrlForAction.call(this, this.apiEndpoints.addAsset());
    };
    UploadAssetFromUrlQuery.prototype.getUploadBinaryFileUrl = function () {
        return _super.prototype.getUrlForAction.call(this, this.apiEndpoints.uploadBinaryFile(this.data.binaryFile.filename));
    };
    UploadAssetFromUrlQuery.prototype.getAction = function () {
        return this.apiEndpoints.addAsset();
    };
    return UploadAssetFromUrlQuery;
}(base_query_1.BaseQuery));
exports.UploadAssetFromUrlQuery = UploadAssetFromUrlQuery;
