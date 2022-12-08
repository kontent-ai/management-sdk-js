"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.BaseManagementQueryService = void 0;
var core_sdk_1 = require("@kontent-ai/core-sdk");
var models_1 = require("../models");
var mime_1 = require("mime");
var BaseManagementQueryService = /** @class */ (function () {
    function BaseManagementQueryService(config, httpService, sdkInfo) {
        this.config = config;
        this.httpService = httpService;
        this.sdkInfo = sdkInfo;
        /**
         * Default base url for content management API
         */
        this.defaultBaseCMUrl = 'https://manage.kontent.ai/v2';
    }
    /**
     * Gets url based on the action, query configuration and options (parameters)
     * @param action Action (= url part) that will be hit
     * @param options Query options
     * @param addSlash Indicates if slash is added to query
     */
    BaseManagementQueryService.prototype.getFullUrl = function (action, options, addSlash) {
        if (addSlash === void 0) { addSlash = true; }
        return core_sdk_1.urlHelper.addOptionsToUrl(this.getBaseUrl() + (addSlash ? '/' : '') + action, options);
    };
    /**
     * Gets proper set of headers for given request.
     * @param config Query config
     */
    BaseManagementQueryService.prototype.getHeaders = function (config) {
        var headers = [
            // sdk tracking header
            core_sdk_1.headerHelper.getSdkIdHeader({
                host: this.sdkInfo.host,
                name: this.sdkInfo.name,
                version: this.sdkInfo.version
            }),
            // add authorization header
            this.getAuthorizationHeader()
        ];
        // add query headers
        headers.push.apply(headers, config.headers);
        return headers;
    };
    /**
     * Http PATCH response
     * @param url Url of request
     * @param config Query configuration
     */
    BaseManagementQueryService.prototype.patchResponseAsync = function (url, body, internalConfig, config) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.httpService.patchAsync({
                                url: url,
                                body: body
                            }, {
                                cancelToken: config.cancelTokenRequest,
                                retryStrategy: this.config.retryStrategy,
                                headers: this.getHeaders(config),
                                responseType: internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw this.mapContentManagementError(error_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Http GET response
     * @param url Url of request
     * @param config Query configuration
     */
    BaseManagementQueryService.prototype.getResponseAsync = function (url, internalConfig, config) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.httpService.getAsync({
                                url: url
                            }, {
                                cancelToken: config.cancelTokenRequest,
                                retryStrategy: this.config.retryStrategy,
                                headers: this.getHeaders(config),
                                responseType: internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_1 = _a.sent();
                        throw this.mapContentManagementError(err_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Http POST response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    BaseManagementQueryService.prototype.postResponseAsync = function (url, body, internalConfig, config) {
        return __awaiter(this, void 0, void 0, function () {
            var err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.httpService.postAsync({
                                url: url,
                                body: body
                            }, {
                                cancelToken: config.cancelTokenRequest,
                                retryStrategy: this.config.retryStrategy,
                                headers: this.getHeaders(config),
                                responseType: internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_2 = _a.sent();
                        throw this.mapContentManagementError(err_2);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Http PUT response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    BaseManagementQueryService.prototype.putResponseAsync = function (url, body, internalConfig, config) {
        return __awaiter(this, void 0, void 0, function () {
            var err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.httpService.putAsync({
                                url: url,
                                body: body
                            }, {
                                cancelToken: config.cancelTokenRequest,
                                retryStrategy: this.config.retryStrategy,
                                headers: this.getHeaders(config),
                                responseType: internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_3 = _a.sent();
                        throw this.mapContentManagementError(err_3);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Http Delete response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    BaseManagementQueryService.prototype.deleteResponseAsync = function (url, internalConfig, config) {
        return __awaiter(this, void 0, void 0, function () {
            var err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.httpService.deleteAsync({
                                url: url
                            }, {
                                cancelToken: config.cancelTokenRequest,
                                retryStrategy: this.config.retryStrategy,
                                headers: this.getHeaders(config),
                                responseType: internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_4 = _a.sent();
                        throw this.mapContentManagementError(err_4);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BaseManagementQueryService.prototype.getBinaryDataFromUrlAsync = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // temp fix for repository not validating url
                        url = url.replace('#', '%23');
                        return [4 /*yield*/, this.httpService.getAsync({
                                url: url
                            }, {
                                responseType: 'arraybuffer'
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    BaseManagementQueryService.prototype.getMimeTypeFromFilename = function (filename) {
        return (0, mime_1.getType)(filename);
    };
    BaseManagementQueryService.prototype.mapContentManagementError = function (error) {
        var _a;
        var axiosError;
        if (error.error) {
            axiosError = error.error;
        }
        else {
            axiosError = error;
        }
        if (!axiosError || !axiosError.isAxiosError) {
            return error;
        }
        var cmError = (_a = axiosError.response) === null || _a === void 0 ? void 0 : _a.data;
        if ((cmError === null || cmError === void 0 ? void 0 : cmError.error_code) || (cmError === null || cmError === void 0 ? void 0 : cmError.request_id)) {
            var validationErrors = [];
            if (cmError.validation_errors) {
                validationErrors.push.apply(validationErrors, cmError.validation_errors.map(function (validationErrorRaw) {
                    return new models_1.SharedModels.ValidationError({
                        message: validationErrorRaw.message
                    });
                }));
            }
            return new models_1.SharedModels.ContentManagementBaseKontentError({
                errorCode: cmError.error_code,
                message: cmError.message,
                originalError: error,
                requestId: cmError.request_id,
                validationErrors: validationErrors
            });
        }
        return error;
    };
    /**
     * Gets authorization header
     */
    BaseManagementQueryService.prototype.getAuthorizationHeader = function () {
        var key = this.config.apiKey;
        if (!key) {
            throw Error("Cannot get authorization header for query type because API Key is undefined");
        }
        return {
            header: 'authorization',
            value: "bearer ".concat(key)
        };
    };
    /**
     * Gets base URL of the request including the project Id
     */
    BaseManagementQueryService.prototype.getBaseUrl = function () {
        if (this.config.baseUrl) {
            return this.config.baseUrl;
        }
        return this.defaultBaseCMUrl;
    };
    return BaseManagementQueryService;
}());
exports.BaseManagementQueryService = BaseManagementQueryService;
