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
exports.ContentItemResponses = void 0;
var base_responses_1 = require("../base-responses");
var ContentItemResponses;
(function (ContentItemResponses) {
    var ContentItemsResponse = /** @class */ (function (_super) {
        __extends(ContentItemsResponse, _super);
        function ContentItemsResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ContentItemsResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementListResponse));
    ContentItemResponses.ContentItemsResponse = ContentItemsResponse;
    var ContentItemsListAllResponse = /** @class */ (function (_super) {
        __extends(ContentItemsListAllResponse, _super);
        function ContentItemsListAllResponse(data) {
            return _super.call(this, data) || this;
        }
        return ContentItemsListAllResponse;
    }(base_responses_1.BaseResponses.ContentManagementListAllResponse));
    ContentItemResponses.ContentItemsListAllResponse = ContentItemsListAllResponse;
    var ViewContentItemResponse = /** @class */ (function (_super) {
        __extends(ViewContentItemResponse, _super);
        function ViewContentItemResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ViewContentItemResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    ContentItemResponses.ViewContentItemResponse = ViewContentItemResponse;
    var AddContentItemResponse = /** @class */ (function (_super) {
        __extends(AddContentItemResponse, _super);
        function AddContentItemResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return AddContentItemResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    ContentItemResponses.AddContentItemResponse = AddContentItemResponse;
    var UpdateContentItemResponse = /** @class */ (function (_super) {
        __extends(UpdateContentItemResponse, _super);
        function UpdateContentItemResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return UpdateContentItemResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    ContentItemResponses.UpdateContentItemResponse = UpdateContentItemResponse;
    var UpsertContentItemResponse = /** @class */ (function (_super) {
        __extends(UpsertContentItemResponse, _super);
        function UpsertContentItemResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return UpsertContentItemResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    ContentItemResponses.UpsertContentItemResponse = UpsertContentItemResponse;
})(ContentItemResponses = exports.ContentItemResponses || (exports.ContentItemResponses = {}));
