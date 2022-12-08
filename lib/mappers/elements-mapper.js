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
exports.elementsMapper = exports.ElementsMapper = void 0;
var models_1 = require("../models");
var base_mapper_1 = require("./base-mapper");
var ElementsMapper = /** @class */ (function (_super) {
    __extends(ElementsMapper, _super);
    function ElementsMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementsMapper.prototype.mapTypeElements = function (elementsRaw) {
        var _this = this;
        return elementsRaw.map(function (m) { return _this.mapTypeElement(m); });
    };
    ElementsMapper.prototype.mapTypeElement = function (rawElement) {
        return rawElement;
    };
    ElementsMapper.prototype.mapElements = function (elementsRaw) {
        var _this = this;
        return elementsRaw.map(function (m) { return _this.mapElement(m); });
    };
    ElementsMapper.prototype.mapElementsWithComponents = function (elementsRaw) {
        var _this = this;
        return elementsRaw.map(function (m) { return _this.mapElementWithComponents(m); });
    };
    ElementsMapper.prototype.mapElementWithComponents = function (rawElement) {
        return new models_1.ElementModels.ContentItemElementWithComponents({
            element: _super.prototype.mapReference.call(this, rawElement.element),
            value: this.mapElementValue(rawElement.value),
            components: this.mapElementComponents(rawElement.components || [])
        });
    };
    ElementsMapper.prototype.mapElement = function (rawElement) {
        return new models_1.ElementModels.ContentItemElement({
            element: _super.prototype.mapReference.call(this, rawElement.element),
            value: this.mapElementValue(rawElement.value),
            mode: rawElement.mode,
            searchableValue: rawElement.searchableValue,
            _raw: rawElement
        });
    };
    ElementsMapper.prototype.mapElementComponents = function (components) {
        var _this = this;
        return components.map(function (m) {
            return new models_1.ElementModels.ContentItemElementComponent({
                elements: _this.mapElementsWithComponents(m.elements),
                id: m.id,
                type: m.type,
                _raw: m
            });
        });
    };
    ElementsMapper.prototype.mapElementValue = function (rawValue) {
        var _this = this;
        if (Array.isArray(rawValue)) {
            return rawValue.map(function (m) { return _super.prototype.mapReference.call(_this, m); });
        }
        return rawValue;
    };
    return ElementsMapper;
}(base_mapper_1.BaseMapper));
exports.ElementsMapper = ElementsMapper;
exports.elementsMapper = new ElementsMapper();
