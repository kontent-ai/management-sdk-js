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
exports.assetFolderMapper = exports.AssetFolderMapper = void 0;
var models_1 = require("../models");
var responses_1 = require("../responses");
var base_mapper_1 = require("./base-mapper");
var AssetFolderMapper = /** @class */ (function (_super) {
    __extends(AssetFolderMapper, _super);
    function AssetFolderMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssetFolderMapper.prototype.mapListAssetFoldersResponse = function (response) {
        var _this = this;
        var items = response.data.folders.map(function (m) { return _this.mapAssetFolder(m); });
        return new responses_1.AssetFolderResponses.AssetFoldersListResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            last_modified: new Date(response.data.last_modified),
            items: items
        });
    };
    AssetFolderMapper.prototype.mapAddAssetFoldersResponse = function (response) {
        var _this = this;
        var items = response.data.folders.map(function (m) { return _this.mapAssetFolder(m); });
        return new responses_1.AssetFolderResponses.AddAssetFoldersResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            last_modified: new Date(response.data.last_modified),
            items: items
        });
    };
    AssetFolderMapper.prototype.mapModifyAssetFoldersResponse = function (response) {
        var _this = this;
        var items = response.data.folders.map(function (m) { return _this.mapAssetFolder(m); });
        return new responses_1.AssetFolderResponses.ModifyAssetFoldersResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            last_modified: new Date(response.data.last_modified),
            items: items
        });
    };
    AssetFolderMapper.prototype.mapAssetFolder = function (rawFolder) {
        var _this = this;
        return new models_1.AssetFolderModels.AssetFolder({
            externalId: rawFolder.external_id,
            id: rawFolder.id,
            name: rawFolder.name,
            folders: rawFolder.folders.map(function (m) { return _this.mapAssetFolder(m); }),
            _raw: rawFolder
        });
    };
    return AssetFolderMapper;
}(base_mapper_1.BaseMapper));
exports.AssetFolderMapper = AssetFolderMapper;
exports.assetFolderMapper = new AssetFolderMapper();
