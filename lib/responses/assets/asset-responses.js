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
exports.AssetResponses = void 0;
var base_responses_1 = require("../base-responses");
var AssetResponses;
(function (AssetResponses) {
    var AssetsListResponse = /** @class */ (function (_super) {
        __extends(AssetsListResponse, _super);
        function AssetsListResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return AssetsListResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementListResponse));
    AssetResponses.AssetsListResponse = AssetsListResponse;
    var AssetsListAllResponse = /** @class */ (function (_super) {
        __extends(AssetsListAllResponse, _super);
        function AssetsListAllResponse(data) {
            return _super.call(this, data) || this;
        }
        return AssetsListAllResponse;
    }(base_responses_1.BaseResponses.ContentManagementListAllResponse));
    AssetResponses.AssetsListAllResponse = AssetsListAllResponse;
    var ViewAssetResponse = /** @class */ (function (_super) {
        __extends(ViewAssetResponse, _super);
        function ViewAssetResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ViewAssetResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    AssetResponses.ViewAssetResponse = ViewAssetResponse;
    var UploadBinaryFileResponse = /** @class */ (function (_super) {
        __extends(UploadBinaryFileResponse, _super);
        function UploadBinaryFileResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return UploadBinaryFileResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    AssetResponses.UploadBinaryFileResponse = UploadBinaryFileResponse;
    var AddAssetResponse = /** @class */ (function (_super) {
        __extends(AddAssetResponse, _super);
        function AddAssetResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return AddAssetResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    AssetResponses.AddAssetResponse = AddAssetResponse;
    var UpdateAssetResponse = /** @class */ (function (_super) {
        __extends(UpdateAssetResponse, _super);
        function UpdateAssetResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return UpdateAssetResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    AssetResponses.UpdateAssetResponse = UpdateAssetResponse;
    var UpsertAssertResponse = /** @class */ (function (_super) {
        __extends(UpsertAssertResponse, _super);
        function UpsertAssertResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return UpsertAssertResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    AssetResponses.UpsertAssertResponse = UpsertAssertResponse;
})(AssetResponses = exports.AssetResponses || (exports.AssetResponses = {}));
