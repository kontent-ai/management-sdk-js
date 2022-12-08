"use strict";
exports.__esModule = true;
exports.EnvironmentModels = void 0;
var EnvironmentModels;
(function (EnvironmentModels) {
    var EnvironmentCloningStateModel = /** @class */ (function () {
        function EnvironmentCloningStateModel(cloningState) {
            this.cloningState = cloningState;
        }
        return EnvironmentCloningStateModel;
    }());
    EnvironmentModels.EnvironmentCloningStateModel = EnvironmentCloningStateModel;
    var EnvironmentModel = /** @class */ (function () {
        function EnvironmentModel(id, name, isProduction) {
            this.id = id;
            this.name = name;
            this.isProduction = isProduction;
        }
        return EnvironmentModel;
    }());
    EnvironmentModels.EnvironmentModel = EnvironmentModel;
    var CloneEnvironmentModel = /** @class */ (function () {
        function CloneEnvironmentModel(id, managementApiKey, deliveryPreviewApiKey, securedDeliveryApiKey) {
            this.id = id;
            this.managementApiKey = managementApiKey;
            this.deliveryPreviewApiKey = deliveryPreviewApiKey;
            this.securedDeliveryApiKey = securedDeliveryApiKey;
        }
        return CloneEnvironmentModel;
    }());
    EnvironmentModels.CloneEnvironmentModel = CloneEnvironmentModel;
})(EnvironmentModels = exports.EnvironmentModels || (exports.EnvironmentModels = {}));
