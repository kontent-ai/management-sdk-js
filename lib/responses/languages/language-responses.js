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
exports.LanguageResponses = void 0;
var base_responses_1 = require("../base-responses");
var LanguageResponses;
(function (LanguageResponses) {
    var ListLanguagesResponse = /** @class */ (function (_super) {
        __extends(ListLanguagesResponse, _super);
        function ListLanguagesResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ListLanguagesResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementListResponse));
    LanguageResponses.ListLanguagesResponse = ListLanguagesResponse;
    var ListAllLanguagesResponse = /** @class */ (function (_super) {
        __extends(ListAllLanguagesResponse, _super);
        function ListAllLanguagesResponse(data) {
            return _super.call(this, data) || this;
        }
        return ListAllLanguagesResponse;
    }(base_responses_1.BaseResponses.ContentManagementListAllResponse));
    LanguageResponses.ListAllLanguagesResponse = ListAllLanguagesResponse;
    var ViewLanguageResponse = /** @class */ (function (_super) {
        __extends(ViewLanguageResponse, _super);
        function ViewLanguageResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ViewLanguageResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    LanguageResponses.ViewLanguageResponse = ViewLanguageResponse;
    var AddLanguageResponse = /** @class */ (function (_super) {
        __extends(AddLanguageResponse, _super);
        function AddLanguageResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return AddLanguageResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    LanguageResponses.AddLanguageResponse = AddLanguageResponse;
    var ModifyLanguageResponse = /** @class */ (function (_super) {
        __extends(ModifyLanguageResponse, _super);
        function ModifyLanguageResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ModifyLanguageResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    LanguageResponses.ModifyLanguageResponse = ModifyLanguageResponse;
})(LanguageResponses = exports.LanguageResponses || (exports.LanguageResponses = {}));
