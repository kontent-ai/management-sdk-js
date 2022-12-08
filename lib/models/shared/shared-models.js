"use strict";
exports.__esModule = true;
exports.SharedModels = void 0;
var SharedModels;
(function (SharedModels) {
    var Pagination = /** @class */ (function () {
        function Pagination(continuationToken, nextPage) {
            this.continuationToken = continuationToken;
            this.nextPage = nextPage;
        }
        return Pagination;
    }());
    SharedModels.Pagination = Pagination;
    var ValidationError = /** @class */ (function () {
        function ValidationError(data) {
            Object.assign(this, data);
        }
        return ValidationError;
    }());
    SharedModels.ValidationError = ValidationError;
    var ContentManagementBaseKontentError = /** @class */ (function () {
        function ContentManagementBaseKontentError(data) {
            this.validationErrors = data.validationErrors;
            this.message = data.message;
            this.requestId = data.requestId;
            this.errorCode = data.errorCode;
            this.originalError = data.originalError;
        }
        return ContentManagementBaseKontentError;
    }());
    SharedModels.ContentManagementBaseKontentError = ContentManagementBaseKontentError;
    var ReferenceObject = /** @class */ (function () {
        function ReferenceObject(data) {
            Object.assign(this, data);
        }
        return ReferenceObject;
    }());
    SharedModels.ReferenceObject = ReferenceObject;
})(SharedModels = exports.SharedModels || (exports.SharedModels = {}));
