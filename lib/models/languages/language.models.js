"use strict";
exports.__esModule = true;
exports.LanguageModels = void 0;
var LanguageModels;
(function (LanguageModels) {
    var LanguageModel = /** @class */ (function () {
        function LanguageModel(data) {
            this.name = data.name;
            this.id = data.id;
            this.codename = data.codename;
            this.externalId = data.externalId;
            this.isActive = data.isActive;
            this.isDefault = data.isDefault;
            this.fallbackLanguage = data.fallbackLanguage;
            this._raw = data._raw;
        }
        return LanguageModel;
    }());
    LanguageModels.LanguageModel = LanguageModel;
    var FallbackLanguageModel = /** @class */ (function () {
        function FallbackLanguageModel(data) {
            this.id = data.id;
        }
        return FallbackLanguageModel;
    }());
    LanguageModels.FallbackLanguageModel = FallbackLanguageModel;
})(LanguageModels = exports.LanguageModels || (exports.LanguageModels = {}));
