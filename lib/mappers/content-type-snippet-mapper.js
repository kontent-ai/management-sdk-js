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
exports.contentTypeSnippetMapper = exports.ContentTypeSnippetMapper = void 0;
var models_1 = require("../models");
var responses_1 = require("../responses");
var base_mapper_1 = require("./base-mapper");
var elements_mapper_1 = require("./elements-mapper");
var ContentTypeSnippetMapper = /** @class */ (function (_super) {
    __extends(ContentTypeSnippetMapper, _super);
    function ContentTypeSnippetMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentTypeSnippetMapper.prototype.mapListingResponse = function (response) {
        var _this = this;
        return new responses_1.ContentTypeSnippetResponses.ContentTypeSnippetListResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            items: response.data.snippets.map(function (m) { return _this.mapContentTypeSnippet(m); }),
            pagination: _super.prototype.mapPagination.call(this, response.data.pagination)
        });
    };
    ContentTypeSnippetMapper.prototype.mapViewContentTypeSnippetResponse = function (response) {
        return new responses_1.ContentTypeSnippetResponses.ViewContentTypeSnippetResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapContentTypeSnippet(response.data));
    };
    ContentTypeSnippetMapper.prototype.mapAddContentTypeSnippetResponse = function (response) {
        return new responses_1.ContentTypeSnippetResponses.AddContentTypeSnippetResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapContentTypeSnippet(response.data));
    };
    ContentTypeSnippetMapper.prototype.mapModifyContentTypeSnippetResponse = function (response) {
        return new responses_1.ContentTypeSnippetResponses.ModifyContentTypeSnippetResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapContentTypeSnippet(response.data));
    };
    ContentTypeSnippetMapper.prototype.mapContentTypeSnippet = function (rawContentType) {
        return new models_1.ContentTypeSnippetModels.ContentTypeSnippet({
            codename: rawContentType.codename,
            id: rawContentType.id,
            name: rawContentType.name,
            elements: elements_mapper_1.elementsMapper.mapTypeElements(rawContentType.elements),
            lastModified: new Date(rawContentType.last_modified),
            externalId: rawContentType.external_id,
            _raw: rawContentType
        });
    };
    return ContentTypeSnippetMapper;
}(base_mapper_1.BaseMapper));
exports.ContentTypeSnippetMapper = ContentTypeSnippetMapper;
exports.contentTypeSnippetMapper = new ContentTypeSnippetMapper();
