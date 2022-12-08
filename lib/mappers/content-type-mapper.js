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
exports.contentTypeMapper = exports.ContentTypeMapper = void 0;
var models_1 = require("../models");
var responses_1 = require("../responses");
var base_mapper_1 = require("./base-mapper");
var elements_mapper_1 = require("./elements-mapper");
var ContentTypeMapper = /** @class */ (function (_super) {
    __extends(ContentTypeMapper, _super);
    function ContentTypeMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentTypeMapper.prototype.mapListingResponse = function (response) {
        var _this = this;
        return new responses_1.ContentTypeResponses.ContentTypeListResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            items: response.data.types.map(function (m) { return _this.mapContentType(m); }),
            pagination: _super.prototype.mapPagination.call(this, response.data.pagination)
        });
    };
    ContentTypeMapper.prototype.mapViewContentTypeResponse = function (response) {
        return new responses_1.ContentTypeResponses.ViewContentTypeResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapContentType(response.data));
    };
    ContentTypeMapper.prototype.mapModifyContentTypeResponse = function (response) {
        return new responses_1.ContentTypeResponses.ModifyContentTypeResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapContentType(response.data));
    };
    ContentTypeMapper.prototype.mapAddContentTypeResponse = function (response) {
        return new responses_1.ContentTypeResponses.AddContentTypeResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapContentType(response.data));
    };
    ContentTypeMapper.prototype.mapContentType = function (rawContentType) {
        var _this = this;
        return new models_1.ContentTypeModels.ContentType({
            codename: rawContentType.codename,
            id: rawContentType.id,
            name: rawContentType.name,
            elements: elements_mapper_1.elementsMapper.mapTypeElements(rawContentType.elements),
            lastModified: new Date(rawContentType.last_modified),
            externalId: rawContentType.external_id,
            contentGroups: rawContentType.content_groups ? rawContentType.content_groups.map(function (m) { return _this.mapContentTypeGroup(m); }) : undefined,
            _raw: rawContentType
        });
    };
    ContentTypeMapper.prototype.mapContentTypeGroup = function (rawContentTypeGroup) {
        return new models_1.ContentTypeModels.ContentTypeGroup({
            name: rawContentTypeGroup.name,
            codename: rawContentTypeGroup.codename,
            externalId: rawContentTypeGroup.external_id,
            id: rawContentTypeGroup.id
        });
    };
    return ContentTypeMapper;
}(base_mapper_1.BaseMapper));
exports.ContentTypeMapper = ContentTypeMapper;
exports.contentTypeMapper = new ContentTypeMapper();
