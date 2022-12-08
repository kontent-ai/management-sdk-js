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
exports.TaxonomyResponses = void 0;
var base_responses_1 = require("../base-responses");
var TaxonomyResponses;
(function (TaxonomyResponses) {
    var TaxonomyListResponse = /** @class */ (function (_super) {
        __extends(TaxonomyListResponse, _super);
        function TaxonomyListResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return TaxonomyListResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementListResponse));
    TaxonomyResponses.TaxonomyListResponse = TaxonomyListResponse;
    var ListAllTaxonomiesResponse = /** @class */ (function (_super) {
        __extends(ListAllTaxonomiesResponse, _super);
        function ListAllTaxonomiesResponse(data) {
            return _super.call(this, data) || this;
        }
        return ListAllTaxonomiesResponse;
    }(base_responses_1.BaseResponses.ContentManagementListAllResponse));
    TaxonomyResponses.ListAllTaxonomiesResponse = ListAllTaxonomiesResponse;
    var GetTaxonomyResponse = /** @class */ (function (_super) {
        __extends(GetTaxonomyResponse, _super);
        function GetTaxonomyResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return GetTaxonomyResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    TaxonomyResponses.GetTaxonomyResponse = GetTaxonomyResponse;
    var AddTaxonomyResponse = /** @class */ (function (_super) {
        __extends(AddTaxonomyResponse, _super);
        function AddTaxonomyResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return AddTaxonomyResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    TaxonomyResponses.AddTaxonomyResponse = AddTaxonomyResponse;
    var ModifyTaxonomyResponse = /** @class */ (function (_super) {
        __extends(ModifyTaxonomyResponse, _super);
        function ModifyTaxonomyResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ModifyTaxonomyResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    TaxonomyResponses.ModifyTaxonomyResponse = ModifyTaxonomyResponse;
})(TaxonomyResponses = exports.TaxonomyResponses || (exports.TaxonomyResponses = {}));
