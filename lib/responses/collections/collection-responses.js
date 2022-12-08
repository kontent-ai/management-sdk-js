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
exports.CollectionResponses = void 0;
var base_responses_1 = require("../base-responses");
var CollectionResponses;
(function (CollectionResponses) {
    var CollectionsListResponse = /** @class */ (function (_super) {
        __extends(CollectionsListResponse, _super);
        function CollectionsListResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return CollectionsListResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    CollectionResponses.CollectionsListResponse = CollectionsListResponse;
    var SetCollectionsResponse = /** @class */ (function (_super) {
        __extends(SetCollectionsResponse, _super);
        function SetCollectionsResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return SetCollectionsResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    CollectionResponses.SetCollectionsResponse = SetCollectionsResponse;
})(CollectionResponses = exports.CollectionResponses || (exports.CollectionResponses = {}));
