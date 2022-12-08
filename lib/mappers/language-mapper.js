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
exports.languageMapper = exports.LanguageMapper = void 0;
var models_1 = require("../models");
var responses_1 = require("../responses");
var base_mapper_1 = require("./base-mapper");
var LanguageMapper = /** @class */ (function (_super) {
    __extends(LanguageMapper, _super);
    function LanguageMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LanguageMapper.prototype.mapViewLanguageResponse = function (response) {
        var language = this.mapLanguage(response.data);
        return new responses_1.LanguageResponses.ViewLanguageResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, language);
    };
    LanguageMapper.prototype.mapModifyLanguageResponse = function (response) {
        var language = this.mapLanguage(response.data);
        return new responses_1.LanguageResponses.ModifyLanguageResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, language);
    };
    LanguageMapper.prototype.mapAddLanguageResponse = function (response) {
        var language = this.mapLanguage(response.data);
        return new responses_1.LanguageResponses.AddLanguageResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, language);
    };
    LanguageMapper.prototype.mapListLanguagesResponse = function (response) {
        var _this = this;
        var languages = response.data.languages.map(function (m) { return _this.mapLanguage(m); });
        return new responses_1.LanguageResponses.ListLanguagesResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            items: languages,
            pagination: _super.prototype.mapPagination.call(this, response.data.pagination)
        });
    };
    LanguageMapper.prototype.mapLanguage = function (rawModel) {
        return new models_1.LanguageModels.LanguageModel({
            codename: rawModel.codename,
            externalId: rawModel.external_id,
            id: rawModel.id,
            isActive: rawModel.is_active,
            isDefault: rawModel.is_default,
            name: rawModel.name,
            fallbackLanguage: rawModel.fallback_language
                ? new models_1.LanguageModels.FallbackLanguageModel({
                    id: rawModel.fallback_language.id
                })
                : undefined,
            _raw: rawModel
        });
    };
    return LanguageMapper;
}(base_mapper_1.BaseMapper));
exports.LanguageMapper = LanguageMapper;
exports.languageMapper = new LanguageMapper();
