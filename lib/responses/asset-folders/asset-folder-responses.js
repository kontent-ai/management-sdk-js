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
exports.AssetFolderResponses = void 0;
var base_responses_1 = require("../base-responses");
var AssetFolderResponses;
(function (AssetFolderResponses) {
    var AssetFoldersListResponse = /** @class */ (function (_super) {
        __extends(AssetFoldersListResponse, _super);
        function AssetFoldersListResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return AssetFoldersListResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    AssetFolderResponses.AssetFoldersListResponse = AssetFoldersListResponse;
    var AddAssetFoldersResponse = /** @class */ (function (_super) {
        __extends(AddAssetFoldersResponse, _super);
        function AddAssetFoldersResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return AddAssetFoldersResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    AssetFolderResponses.AddAssetFoldersResponse = AddAssetFoldersResponse;
    var ModifyAssetFoldersResponse = /** @class */ (function (_super) {
        __extends(ModifyAssetFoldersResponse, _super);
        function ModifyAssetFoldersResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ModifyAssetFoldersResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    AssetFolderResponses.ModifyAssetFoldersResponse = ModifyAssetFoldersResponse;
})(AssetFolderResponses = exports.AssetFolderResponses || (exports.AssetFolderResponses = {}));
