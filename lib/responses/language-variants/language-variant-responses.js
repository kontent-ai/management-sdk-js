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
exports.LanguageVariantResponses = void 0;
var base_responses_1 = require("../base-responses");
var LanguageVariantResponses;
(function (LanguageVariantResponses) {
    var ListLanguageVariantsOfItemResponse = /** @class */ (function (_super) {
        __extends(ListLanguageVariantsOfItemResponse, _super);
        function ListLanguageVariantsOfItemResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ListLanguageVariantsOfItemResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    LanguageVariantResponses.ListLanguageVariantsOfItemResponse = ListLanguageVariantsOfItemResponse;
    var ListLanguageVariantsOfContentTypeWithComponentsResponse = /** @class */ (function (_super) {
        __extends(ListLanguageVariantsOfContentTypeWithComponentsResponse, _super);
        function ListLanguageVariantsOfContentTypeWithComponentsResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ListLanguageVariantsOfContentTypeWithComponentsResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementListResponse));
    LanguageVariantResponses.ListLanguageVariantsOfContentTypeWithComponentsResponse = ListLanguageVariantsOfContentTypeWithComponentsResponse;
    var ListAllLanguageVariantsOfContentTypeWithComponentsResponse = /** @class */ (function (_super) {
        __extends(ListAllLanguageVariantsOfContentTypeWithComponentsResponse, _super);
        function ListAllLanguageVariantsOfContentTypeWithComponentsResponse(data) {
            return _super.call(this, data) || this;
        }
        return ListAllLanguageVariantsOfContentTypeWithComponentsResponse;
    }(base_responses_1.BaseResponses.ContentManagementListAllResponse));
    LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeWithComponentsResponse = ListAllLanguageVariantsOfContentTypeWithComponentsResponse;
    var ListLanguageVariantsOfContentTypeResponse = /** @class */ (function (_super) {
        __extends(ListLanguageVariantsOfContentTypeResponse, _super);
        function ListLanguageVariantsOfContentTypeResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ListLanguageVariantsOfContentTypeResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementListResponse));
    LanguageVariantResponses.ListLanguageVariantsOfContentTypeResponse = ListLanguageVariantsOfContentTypeResponse;
    var ListLanguageVariantsByCollectionResponse = /** @class */ (function (_super) {
        __extends(ListLanguageVariantsByCollectionResponse, _super);
        function ListLanguageVariantsByCollectionResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ListLanguageVariantsByCollectionResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementListResponse));
    LanguageVariantResponses.ListLanguageVariantsByCollectionResponse = ListLanguageVariantsByCollectionResponse;
    var ListAllLanguageVariantsOfContentTypeResponse = /** @class */ (function (_super) {
        __extends(ListAllLanguageVariantsOfContentTypeResponse, _super);
        function ListAllLanguageVariantsOfContentTypeResponse(data) {
            return _super.call(this, data) || this;
        }
        return ListAllLanguageVariantsOfContentTypeResponse;
    }(base_responses_1.BaseResponses.ContentManagementListAllResponse));
    LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeResponse = ListAllLanguageVariantsOfContentTypeResponse;
    var ListAllLanguageVariantsByCollectionResponse = /** @class */ (function (_super) {
        __extends(ListAllLanguageVariantsByCollectionResponse, _super);
        function ListAllLanguageVariantsByCollectionResponse(data) {
            return _super.call(this, data) || this;
        }
        return ListAllLanguageVariantsByCollectionResponse;
    }(base_responses_1.BaseResponses.ContentManagementListAllResponse));
    LanguageVariantResponses.ListAllLanguageVariantsByCollectionResponse = ListAllLanguageVariantsByCollectionResponse;
    var UpsertLanguageVariantResponse = /** @class */ (function (_super) {
        __extends(UpsertLanguageVariantResponse, _super);
        function UpsertLanguageVariantResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return UpsertLanguageVariantResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    LanguageVariantResponses.UpsertLanguageVariantResponse = UpsertLanguageVariantResponse;
    var ViewLanguageVariantResponse = /** @class */ (function (_super) {
        __extends(ViewLanguageVariantResponse, _super);
        function ViewLanguageVariantResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ViewLanguageVariantResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    LanguageVariantResponses.ViewLanguageVariantResponse = ViewLanguageVariantResponse;
})(LanguageVariantResponses = exports.LanguageVariantResponses || (exports.LanguageVariantResponses = {}));
