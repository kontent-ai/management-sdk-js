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
exports.languageVariantMapper = exports.LanguageVariantMapper = void 0;
var models_1 = require("../models");
var responses_1 = require("../responses");
var base_mapper_1 = require("./base-mapper");
var elements_mapper_1 = require("./elements-mapper");
var LanguageVariantMapper = /** @class */ (function (_super) {
    __extends(LanguageVariantMapper, _super);
    function LanguageVariantMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LanguageVariantMapper.prototype.mapUpsertLanguageVariantResponse = function (response) {
        var variant = this.mapLanguageVariant(response.data);
        return new responses_1.LanguageVariantResponses.UpsertLanguageVariantResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, variant);
    };
    LanguageVariantMapper.prototype.mapViewLanguageVariantResponse = function (response) {
        var variant = this.mapLanguageVariant(response.data);
        return new responses_1.LanguageVariantResponses.ViewLanguageVariantResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, variant);
    };
    LanguageVariantMapper.prototype.mapLanguageVariantsOfItemResponse = function (response) {
        var _this = this;
        var variants = response.data.map(function (m) { return _this.mapLanguageVariant(m); });
        return new responses_1.LanguageVariantResponses.ListLanguageVariantsOfItemResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            items: variants
        });
    };
    LanguageVariantMapper.prototype.mapLanguageVariantsByCollectionResponse = function (response) {
        var _this = this;
        var variants = response.data.variants.map(function (m) { return _this.mapLanguageVariant(m); });
        return new responses_1.LanguageVariantResponses.ListLanguageVariantsByCollectionResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            items: variants,
            pagination: _super.prototype.mapPagination.call(this, response.data.pagination)
        });
    };
    LanguageVariantMapper.prototype.mapLanguageVariantsOfContentTypeResponse = function (response) {
        var _this = this;
        var variants = response.data.variants.map(function (m) { return _this.mapLanguageVariant(m); });
        return new responses_1.LanguageVariantResponses.ListLanguageVariantsOfContentTypeResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            items: variants,
            pagination: _super.prototype.mapPagination.call(this, response.data.pagination)
        });
    };
    LanguageVariantMapper.prototype.mapLanguageVariantsOfContentTypeWithComponentsResponse = function (response) {
        var _this = this;
        var variants = response.data.variants.map(function (m) { return _this.mapLanguageVariantWithComponents(m); });
        return new responses_1.LanguageVariantResponses.ListLanguageVariantsOfContentTypeWithComponentsResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            items: variants,
            pagination: _super.prototype.mapPagination.call(this, response.data.pagination)
        });
    };
    LanguageVariantMapper.prototype.mapLanguageVariantWithComponents = function (rawVariant) {
        return new models_1.LanguageVariantModels.ContentItemLanguageWithComponentsVariant({
            rawElements: rawVariant.elements,
            elements: elements_mapper_1.elementsMapper.mapElementsWithComponents(rawVariant.elements),
            item: _super.prototype.mapReference.call(this, rawVariant.item),
            language: _super.prototype.mapReference.call(this, rawVariant.language),
            lastModified: new Date(rawVariant.last_modified),
            workflowStep: _super.prototype.mapReference.call(this, rawVariant.workflow_step),
            _raw: rawVariant
        });
    };
    LanguageVariantMapper.prototype.mapLanguageVariant = function (rawVariant) {
        return new models_1.LanguageVariantModels.ContentItemLanguageVariant({
            rawElements: rawVariant.elements,
            elements: elements_mapper_1.elementsMapper.mapElements(rawVariant.elements),
            item: _super.prototype.mapReference.call(this, rawVariant.item),
            language: _super.prototype.mapReference.call(this, rawVariant.language),
            lastModified: new Date(rawVariant.last_modified),
            workflowStep: _super.prototype.mapReference.call(this, rawVariant.workflow_step),
            _raw: rawVariant
        });
    };
    return LanguageVariantMapper;
}(base_mapper_1.BaseMapper));
exports.LanguageVariantMapper = LanguageVariantMapper;
exports.languageVariantMapper = new LanguageVariantMapper();
