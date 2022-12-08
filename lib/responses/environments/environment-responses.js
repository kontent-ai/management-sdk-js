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
exports.EnvironmentResponses = void 0;
var base_responses_1 = require("../base-responses");
var EnvironmentResponses;
(function (EnvironmentResponses) {
    var GetCloningStateResponse = /** @class */ (function (_super) {
        __extends(GetCloningStateResponse, _super);
        function GetCloningStateResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return GetCloningStateResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    EnvironmentResponses.GetCloningStateResponse = GetCloningStateResponse;
    var ModifyEnvironmentResponse = /** @class */ (function (_super) {
        __extends(ModifyEnvironmentResponse, _super);
        function ModifyEnvironmentResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ModifyEnvironmentResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    EnvironmentResponses.ModifyEnvironmentResponse = ModifyEnvironmentResponse;
    var CloneEnvironmentResponse = /** @class */ (function (_super) {
        __extends(CloneEnvironmentResponse, _super);
        function CloneEnvironmentResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return CloneEnvironmentResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    EnvironmentResponses.CloneEnvironmentResponse = CloneEnvironmentResponse;
})(EnvironmentResponses = exports.EnvironmentResponses || (exports.EnvironmentResponses = {}));
