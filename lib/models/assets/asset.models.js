"use strict";
exports.__esModule = true;
exports.AssetModels = void 0;
var AssetModels;
(function (AssetModels) {
    var Asset = /** @class */ (function () {
        function Asset(data) {
            Object.assign(this, data);
        }
        return Asset;
    }());
    AssetModels.Asset = Asset;
    var AssetFileReference = /** @class */ (function () {
        function AssetFileReference(data) {
            this.id = data.id;
            this.type = data.type;
        }
        return AssetFileReference;
    }());
    AssetModels.AssetFileReference = AssetFileReference;
    var AssetFileDescription = /** @class */ (function () {
        function AssetFileDescription(data) {
            this.language = data.language;
            this.description = data.description;
        }
        return AssetFileDescription;
    }());
    AssetModels.AssetFileDescription = AssetFileDescription;
})(AssetModels = exports.AssetModels || (exports.AssetModels = {}));
