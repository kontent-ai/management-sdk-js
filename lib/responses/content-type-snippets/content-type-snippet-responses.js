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
exports.ContentTypeSnippetResponses = void 0;
var base_responses_1 = require("../base-responses");
var ContentTypeSnippetResponses;
(function (ContentTypeSnippetResponses) {
    var ContentTypeSnippetListResponse = /** @class */ (function (_super) {
        __extends(ContentTypeSnippetListResponse, _super);
        function ContentTypeSnippetListResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ContentTypeSnippetListResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementListResponse));
    ContentTypeSnippetResponses.ContentTypeSnippetListResponse = ContentTypeSnippetListResponse;
    var ContentTypeSnippetListAllResponse = /** @class */ (function (_super) {
        __extends(ContentTypeSnippetListAllResponse, _super);
        function ContentTypeSnippetListAllResponse(data) {
            return _super.call(this, data) || this;
        }
        return ContentTypeSnippetListAllResponse;
    }(base_responses_1.BaseResponses.ContentManagementListAllResponse));
    ContentTypeSnippetResponses.ContentTypeSnippetListAllResponse = ContentTypeSnippetListAllResponse;
    var ViewContentTypeSnippetResponse = /** @class */ (function (_super) {
        __extends(ViewContentTypeSnippetResponse, _super);
        function ViewContentTypeSnippetResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ViewContentTypeSnippetResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    ContentTypeSnippetResponses.ViewContentTypeSnippetResponse = ViewContentTypeSnippetResponse;
    var AddContentTypeSnippetResponse = /** @class */ (function (_super) {
        __extends(AddContentTypeSnippetResponse, _super);
        function AddContentTypeSnippetResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return AddContentTypeSnippetResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    ContentTypeSnippetResponses.AddContentTypeSnippetResponse = AddContentTypeSnippetResponse;
    var ModifyContentTypeSnippetResponse = /** @class */ (function (_super) {
        __extends(ModifyContentTypeSnippetResponse, _super);
        function ModifyContentTypeSnippetResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ModifyContentTypeSnippetResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    ContentTypeSnippetResponses.ModifyContentTypeSnippetResponse = ModifyContentTypeSnippetResponse;
})(ContentTypeSnippetResponses = exports.ContentTypeSnippetResponses || (exports.ContentTypeSnippetResponses = {}));
