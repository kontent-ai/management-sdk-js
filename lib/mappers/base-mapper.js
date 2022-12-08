"use strict";
exports.__esModule = true;
exports.BaseMapper = void 0;
var models_1 = require("../models");
var responses_1 = require("../responses");
var BaseMapper = /** @class */ (function () {
    function BaseMapper() {
    }
    BaseMapper.prototype.mapResponseDebug = function (baseResponse) {
        if (!baseResponse) {
            throw Error("Cannot map debug model from the response");
        }
        return {
            response: baseResponse
        };
    };
    BaseMapper.prototype.mapPagination = function (rawPagination) {
        return new models_1.SharedModels.Pagination(rawPagination.continuation_token, rawPagination.next_page);
    };
    BaseMapper.prototype.mapReference = function (rawReference) {
        return new models_1.SharedModels.ReferenceObject({
            codename: rawReference.codename,
            externalId: rawReference.external_id,
            id: rawReference.id
        });
    };
    BaseMapper.prototype.mapEmptyResponse = function (response) {
        return new responses_1.BaseResponses.EmptyContentManagementResponse(this.mapResponseDebug(response), undefined, undefined);
    };
    return BaseMapper;
}());
exports.BaseMapper = BaseMapper;
