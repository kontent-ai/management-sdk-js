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
exports.BaseResponses = void 0;
var BaseResponses;
(function (BaseResponses) {
    var ContentManagementListAllResponse = /** @class */ (function () {
        function ContentManagementListAllResponse(obj) {
            this.responses = obj.responses;
            this.data = {
                items: obj.items
            };
        }
        return ContentManagementListAllResponse;
    }());
    BaseResponses.ContentManagementListAllResponse = ContentManagementListAllResponse;
    var BaseContentManagementListResponse = /** @class */ (function () {
        function BaseContentManagementListResponse(debug, rawData, data) {
            this.debug = debug;
            this.rawData = rawData;
            this.data = data;
        }
        return BaseContentManagementListResponse;
    }());
    BaseResponses.BaseContentManagementListResponse = BaseContentManagementListResponse;
    var BaseContentManagementResponse = /** @class */ (function () {
        function BaseContentManagementResponse(debug, rawData, data) {
            this.debug = debug;
            this.rawData = rawData;
            this.data = data;
        }
        return BaseContentManagementResponse;
    }());
    BaseResponses.BaseContentManagementResponse = BaseContentManagementResponse;
    var EmptyContentManagementResponse = /** @class */ (function (_super) {
        __extends(EmptyContentManagementResponse, _super);
        function EmptyContentManagementResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return EmptyContentManagementResponse;
    }(BaseResponses.BaseContentManagementResponse));
    BaseResponses.EmptyContentManagementResponse = EmptyContentManagementResponse;
})(BaseResponses = exports.BaseResponses || (exports.BaseResponses = {}));
