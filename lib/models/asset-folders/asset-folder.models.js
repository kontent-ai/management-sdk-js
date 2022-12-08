"use strict";
exports.__esModule = true;
exports.AssetFolderModels = void 0;
var AssetFolderModels;
(function (AssetFolderModels) {
    var AssetFolder = /** @class */ (function () {
        function AssetFolder(data) {
            this.id = data.id;
            this.name = data.name;
            this.externalId = data.externalId;
            this.folders = data.folders;
            this._raw = data._raw;
        }
        return AssetFolder;
    }());
    AssetFolderModels.AssetFolder = AssetFolder;
})(AssetFolderModels = exports.AssetFolderModels || (exports.AssetFolderModels = {}));
