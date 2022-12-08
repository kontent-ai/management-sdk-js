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
exports.assetRenditionMapper = exports.AssetRenditionMapper = void 0;
var models_1 = require("../models");
var responses_1 = require("../responses");
var base_mapper_1 = require("./base-mapper");
var AssetRenditionMapper = /** @class */ (function (_super) {
    __extends(AssetRenditionMapper, _super);
    function AssetRenditionMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssetRenditionMapper.prototype.mapListAssetRenditionsResponse = function (response) {
        var _this = this;
        return new responses_1.AssetRenditionResponses.AssetRenditionsListResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            items: response.data.asset_renditions.map(function (m) { return _this.mapAssetRendition(m); }),
            pagination: _super.prototype.mapPagination.call(this, response.data.pagination)
        });
    };
    AssetRenditionMapper.prototype.mapViewAssetRenditionResponse = function (response) {
        return new responses_1.AssetRenditionResponses.ViewAssetRenditionResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapAssetRendition(response.data));
    };
    AssetRenditionMapper.prototype.mapModifyAssetRenditionResponse = function (response) {
        return new responses_1.AssetRenditionResponses.ModifyAssetRenditionResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapAssetRendition(response.data));
    };
    AssetRenditionMapper.prototype.mapAddAssetRenditionResponse = function (response) {
        return new responses_1.AssetRenditionResponses.AddAssetRenditionResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapAssetRendition(response.data));
    };
    AssetRenditionMapper.prototype.mapAssetRendition = function (raw) {
        return new models_1.AssetRenditionModels.AssetRendition({
            assetId: raw.asset_id,
            externalId: raw.external_id,
            lastModified: new Date(raw.last_modified),
            renditionId: raw.rendition_id,
            transformation: {
                fit: raw.transformation.fit,
                height: raw.transformation.height,
                mode: raw.transformation.mode,
                width: raw.transformation.width,
                x: raw.transformation.x,
                y: raw.transformation.y,
                customHeight: raw.transformation.custom_height,
                customWidth: raw.transformation.custom_width
            },
            _raw: raw
        });
    };
    return AssetRenditionMapper;
}(base_mapper_1.BaseMapper));
exports.AssetRenditionMapper = AssetRenditionMapper;
exports.assetRenditionMapper = new AssetRenditionMapper();
