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
exports.collectionsMappers = exports.CollectionsMapper = void 0;
var models_1 = require("../models");
var responses_1 = require("../responses");
var base_mapper_1 = require("./base-mapper");
var CollectionsMapper = /** @class */ (function (_super) {
    __extends(CollectionsMapper, _super);
    function CollectionsMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionsMapper.prototype.mapListCollectionsResponse = function (response) {
        var _this = this;
        var items = response.data.collections.map(function (m) { return _this.mapCollection(m); });
        return new responses_1.CollectionResponses.CollectionsListResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            lastModified: response.data.last_modified ? new Date(response.data.last_modified) : undefined,
            collections: items
        });
    };
    CollectionsMapper.prototype.mapSetCollectionsResponse = function (response) {
        var _this = this;
        var items = response.data.collections.map(function (m) { return _this.mapCollection(m); });
        return new responses_1.CollectionResponses.SetCollectionsResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            lastModified: response.data.last_modified ? new Date(response.data.last_modified) : undefined,
            collections: items
        });
    };
    CollectionsMapper.prototype.mapCollection = function (rawCollection) {
        return new models_1.CollectionModels.Collection({
            id: rawCollection.id,
            name: rawCollection.name,
            codename: rawCollection.codename,
            _raw: rawCollection
        });
    };
    return CollectionsMapper;
}(base_mapper_1.BaseMapper));
exports.CollectionsMapper = CollectionsMapper;
exports.collectionsMappers = new CollectionsMapper();
