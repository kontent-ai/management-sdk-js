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
exports.AssetRenditionResponses = void 0;
var base_responses_1 = require("../base-responses");
var AssetRenditionResponses;
(function (AssetRenditionResponses) {
    var AssetRenditionsListResponse = /** @class */ (function (_super) {
        __extends(AssetRenditionsListResponse, _super);
        function AssetRenditionsListResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return AssetRenditionsListResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementListResponse));
    AssetRenditionResponses.AssetRenditionsListResponse = AssetRenditionsListResponse;
    var AssetRenditionsListAllResponse = /** @class */ (function (_super) {
        __extends(AssetRenditionsListAllResponse, _super);
        function AssetRenditionsListAllResponse(data) {
            return _super.call(this, data) || this;
        }
        return AssetRenditionsListAllResponse;
    }(base_responses_1.BaseResponses.ContentManagementListAllResponse));
    AssetRenditionResponses.AssetRenditionsListAllResponse = AssetRenditionsListAllResponse;
    var ModifyAssetRenditionResponse = /** @class */ (function (_super) {
        __extends(ModifyAssetRenditionResponse, _super);
        function ModifyAssetRenditionResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ModifyAssetRenditionResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    AssetRenditionResponses.ModifyAssetRenditionResponse = ModifyAssetRenditionResponse;
    var ViewAssetRenditionResponse = /** @class */ (function (_super) {
        __extends(ViewAssetRenditionResponse, _super);
        function ViewAssetRenditionResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ViewAssetRenditionResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    AssetRenditionResponses.ViewAssetRenditionResponse = ViewAssetRenditionResponse;
    var AddAssetRenditionResponse = /** @class */ (function (_super) {
        __extends(AddAssetRenditionResponse, _super);
        function AddAssetRenditionResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return AddAssetRenditionResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    AssetRenditionResponses.AddAssetRenditionResponse = AddAssetRenditionResponse;
})(AssetRenditionResponses = exports.AssetRenditionResponses || (exports.AssetRenditionResponses = {}));
