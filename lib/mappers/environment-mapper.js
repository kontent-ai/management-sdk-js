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
exports.environmentMapper = exports.EnvironmentMapper = void 0;
var base_mapper_1 = require("./base-mapper");
var environment_responses_1 = require("../responses/environments/environment-responses");
var environment_models_1 = require("../models/environments/environment.models");
var CloneEnvironmentModel = environment_models_1.EnvironmentModels.CloneEnvironmentModel;
var EnvironmentMapper = /** @class */ (function (_super) {
    __extends(EnvironmentMapper, _super);
    function EnvironmentMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnvironmentMapper.prototype.mapGetEnvironmentCloningStateResponse = function (response) {
        return new environment_responses_1.EnvironmentResponses.GetCloningStateResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            cloningInfo: new environment_models_1.EnvironmentModels.EnvironmentCloningStateModel(response.data.cloning_state)
        });
    };
    EnvironmentMapper.prototype.mapModifyEnvironmentResponse = function (response) {
        return new environment_responses_1.EnvironmentResponses.ModifyEnvironmentResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, new environment_models_1.EnvironmentModels.EnvironmentModel(response.data.id, response.data.name, response.data.is_production));
    };
    EnvironmentMapper.prototype.mapCloneEnvironmentResponse = function (response) {
        return new environment_responses_1.EnvironmentResponses.CloneEnvironmentResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, new CloneEnvironmentModel(response.data.id, response.data.management_api_key, response.data.delivery_preview_api_key, response.data.secured_delivery_api_key));
    };
    return EnvironmentMapper;
}(base_mapper_1.BaseMapper));
exports.EnvironmentMapper = EnvironmentMapper;
exports.environmentMapper = new EnvironmentMapper();
