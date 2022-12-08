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
exports.taxonomyMappper = exports.TaxonomyMapper = void 0;
var models_1 = require("../models");
var responses_1 = require("../responses");
var base_mapper_1 = require("./base-mapper");
var TaxonomyMapper = /** @class */ (function (_super) {
    __extends(TaxonomyMapper, _super);
    function TaxonomyMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaxonomyMapper.prototype.mapListingTaxonomysResponse = function (response) {
        var _this = this;
        var taxonomies;
        var pagination;
        // temporary mapping of taxonomies before API breaking change
        if (Array.isArray(response.data)) {
            taxonomies = response.data.map(function (m) { return _this.mapTaxonomy(m); });
            pagination = new models_1.SharedModels.Pagination(null, null);
        }
        else {
            // new API response model
            taxonomies = response.data.taxonomies.map(function (m) { return _this.mapTaxonomy(m); });
            pagination = _super.prototype.mapPagination.call(this, response.data.pagination);
        }
        return new responses_1.TaxonomyResponses.TaxonomyListResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            pagination: pagination,
            items: taxonomies
        });
    };
    TaxonomyMapper.prototype.mapGetTaxonomyResponse = function (response) {
        var taxonomy = this.mapTaxonomy(response.data);
        return new responses_1.TaxonomyResponses.GetTaxonomyResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, taxonomy);
    };
    TaxonomyMapper.prototype.mapModifyTaxonomyResponse = function (response) {
        var taxonomy = this.mapTaxonomy(response.data);
        return new responses_1.TaxonomyResponses.ModifyTaxonomyResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, taxonomy);
    };
    TaxonomyMapper.prototype.mapAddTaxonomyResponse = function (response) {
        var taxonomy = this.mapTaxonomy(response.data);
        return new responses_1.TaxonomyResponses.AddTaxonomyResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, taxonomy);
    };
    TaxonomyMapper.prototype.mapTaxonomy = function (rawTaxonomy) {
        var _this = this;
        return new models_1.TaxonomyModels.Taxonomy({
            codename: rawTaxonomy.codename,
            id: rawTaxonomy.id,
            lastModified: new Date(rawTaxonomy.last_modified),
            name: rawTaxonomy.name,
            terms: rawTaxonomy.terms.map(function (m) { return _this.mapTaxonomy(m); }),
            externalId: rawTaxonomy.external_id,
            _raw: rawTaxonomy
        });
    };
    return TaxonomyMapper;
}(base_mapper_1.BaseMapper));
exports.TaxonomyMapper = TaxonomyMapper;
exports.taxonomyMappper = new TaxonomyMapper();
