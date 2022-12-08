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
exports.ContentTypeResponses = void 0;
var base_responses_1 = require("../base-responses");
var ContentTypeResponses;
(function (ContentTypeResponses) {
    var ContentTypeListResponse = /** @class */ (function (_super) {
        __extends(ContentTypeListResponse, _super);
        function ContentTypeListResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ContentTypeListResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementListResponse));
    ContentTypeResponses.ContentTypeListResponse = ContentTypeListResponse;
    var ContentTypeListAllResponse = /** @class */ (function (_super) {
        __extends(ContentTypeListAllResponse, _super);
        function ContentTypeListAllResponse(data) {
            return _super.call(this, data) || this;
        }
        return ContentTypeListAllResponse;
    }(base_responses_1.BaseResponses.ContentManagementListAllResponse));
    ContentTypeResponses.ContentTypeListAllResponse = ContentTypeListAllResponse;
    var ModifyContentTypeResponse = /** @class */ (function (_super) {
        __extends(ModifyContentTypeResponse, _super);
        function ModifyContentTypeResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ModifyContentTypeResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    ContentTypeResponses.ModifyContentTypeResponse = ModifyContentTypeResponse;
    var ViewContentTypeResponse = /** @class */ (function (_super) {
        __extends(ViewContentTypeResponse, _super);
        function ViewContentTypeResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ViewContentTypeResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    ContentTypeResponses.ViewContentTypeResponse = ViewContentTypeResponse;
    var AddContentTypeResponse = /** @class */ (function (_super) {
        __extends(AddContentTypeResponse, _super);
        function AddContentTypeResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return AddContentTypeResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    ContentTypeResponses.AddContentTypeResponse = AddContentTypeResponse;
})(ContentTypeResponses = exports.ContentTypeResponses || (exports.ContentTypeResponses = {}));
