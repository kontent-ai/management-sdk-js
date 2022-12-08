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
exports.genericMapper = exports.GenericMapper = void 0;
var responses_1 = require("../responses");
var base_mapper_1 = require("./base-mapper");
var GenericMapper = /** @class */ (function (_super) {
    __extends(GenericMapper, _super);
    function GenericMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenericMapper.prototype.mapGenericResponse = function (response) {
        return new responses_1.GenericResponses.GenericResponse(_super.prototype.mapResponseDebug.call(this, response), response.data);
    };
    return GenericMapper;
}(base_mapper_1.BaseMapper));
exports.GenericMapper = GenericMapper;
exports.genericMapper = new GenericMapper();
