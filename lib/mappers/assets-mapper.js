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
exports.assetsMapper = exports.AssetsMapper = void 0;
var models_1 = require("../models");
var responses_1 = require("../responses");
var base_mapper_1 = require("./base-mapper");
var AssetsMapper = /** @class */ (function (_super) {
    __extends(AssetsMapper, _super);
    function AssetsMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssetsMapper.prototype.mapListingAssetsResponse = function (response) {
        var _this = this;
        var pagination = _super.prototype.mapPagination.call(this, response.data.pagination);
        var items = response.data.assets.map(function (m) { return _this.mapAsset(m); });
        return new responses_1.AssetResponses.AssetsListResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            pagination: pagination,
            items: items
        });
    };
    AssetsMapper.prototype.mapViewAssetResponse = function (response) {
        return new responses_1.AssetResponses.ViewAssetResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapAsset(response.data));
    };
    AssetsMapper.prototype.mapUploadBinaryFileResponse = function (response) {
        return new responses_1.AssetResponses.UploadBinaryFileResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapAssetReference(response.data));
    };
    AssetsMapper.prototype.mapAddAssetResponse = function (response) {
        return new responses_1.AssetResponses.AddAssetResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapAsset(response.data));
    };
    AssetsMapper.prototype.mapUpdateAssetResponse = function (response) {
        return new responses_1.AssetResponses.UpdateAssetResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapAsset(response.data));
    };
    AssetsMapper.prototype.mapUpsertAssetResponse = function (response) {
        return new responses_1.AssetResponses.UpsertAssertResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapAsset(response.data));
    };
    AssetsMapper.prototype.mapAssetReference = function (rawFileReference) {
        return new models_1.AssetModels.AssetFileReference({
            id: rawFileReference.id,
            type: rawFileReference.type
        });
    };
    AssetsMapper.prototype.mapAsset = function (rawAsset) {
        var _this = this;
        return new models_1.AssetModels.Asset({
            descriptions: rawAsset.descriptions.map(function (m) {
                return new models_1.AssetModels.AssetFileDescription({
                    description: m.description,
                    language: _super.prototype.mapReference.call(_this, m.language)
                });
            }),
            externalId: rawAsset.external_id,
            fileName: rawAsset.file_name,
            fileReference: this.mapAssetReference(rawAsset.file_reference),
            id: rawAsset.id,
            url: rawAsset.url,
            imageHeight: rawAsset.image_height,
            imageWidth: rawAsset.image_width,
            lastModified: new Date(rawAsset.last_modified),
            size: rawAsset.size,
            title: rawAsset.title,
            type: rawAsset.type,
            folder: rawAsset.folder,
            _raw: rawAsset
        });
    };
    return AssetsMapper;
}(base_mapper_1.BaseMapper));
exports.AssetsMapper = AssetsMapper;
exports.assetsMapper = new AssetsMapper();
