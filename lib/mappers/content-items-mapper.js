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
exports.contentItemsMapper = exports.ContentItemsMapper = void 0;
var models_1 = require("../models");
var responses_1 = require("../responses");
var base_mapper_1 = require("./base-mapper");
var ContentItemsMapper = /** @class */ (function (_super) {
    __extends(ContentItemsMapper, _super);
    function ContentItemsMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentItemsMapper.prototype.mapListingItemsResponse = function (response) {
        var _this = this;
        var pagination = _super.prototype.mapPagination.call(this, response.data.pagination);
        var items = response.data.items.map(function (m) { return _this.mapContentItem(m); });
        return new responses_1.ContentItemResponses.ContentItemsResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            pagination: pagination,
            items: items
        });
    };
    ContentItemsMapper.prototype.mapViewContentItemResponse = function (response) {
        return new responses_1.ContentItemResponses.ViewContentItemResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapContentItem(response.data));
    };
    ContentItemsMapper.prototype.mapAddContentItemResponse = function (response) {
        return new responses_1.ContentItemResponses.AddContentItemResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapContentItem(response.data));
    };
    ContentItemsMapper.prototype.mapUpdateContentItemResponse = function (response) {
        return new responses_1.ContentItemResponses.UpdateContentItemResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapContentItem(response.data));
    };
    ContentItemsMapper.prototype.mapUpsertContentItemResponse = function (response) {
        return new responses_1.ContentItemResponses.UpsertContentItemResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapContentItem(response.data));
    };
    ContentItemsMapper.prototype.mapContentItem = function (rawItem) {
        return new models_1.ContentItemModels.ContentItem({
            codename: rawItem.codename,
            externalId: rawItem.external_id,
            id: rawItem.id,
            lastModified: new Date(rawItem.last_modified),
            name: rawItem.name,
            type: rawItem.type,
            collection: _super.prototype.mapReference.call(this, rawItem.collection),
            _raw: rawItem
        });
    };
    return ContentItemsMapper;
}(base_mapper_1.BaseMapper));
exports.ContentItemsMapper = ContentItemsMapper;
exports.contentItemsMapper = new ContentItemsMapper();
