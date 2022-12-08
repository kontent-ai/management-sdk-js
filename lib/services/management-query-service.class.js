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
exports.ManagementQueryService = void 0;
var mappers_1 = require("../mappers");
var webhook_mapper_1 = require("../mappers/webhook-mapper");
var base_management_service_class_1 = require("./base-management-service.class");
var environment_mapper_1 = require("../mappers/environment-mapper");
var ManagementQueryService = /** @class */ (function (_super) {
    __extends(ManagementQueryService, _super);
    function ManagementQueryService(config, httpService, sdkInfo) {
        var _this = _super.call(this, config, httpService, sdkInfo) || this;
        _this.config = config;
        _this.httpService = httpService;
        _this.sdkInfo = sdkInfo;
        return _this;
    }
    ManagementQueryService.prototype.genericPostResponseAsync = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.genericMapper).mapGenericResponse;
                        return [4 /*yield*/, _super.prototype.postResponseAsync.call(this, url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.genericPatchResponseAsync = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.genericMapper).mapGenericResponse;
                        return [4 /*yield*/, _super.prototype.patchResponseAsync.call(this, url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.genericDeleteResponseAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.genericMapper).mapGenericResponse;
                        return [4 /*yield*/, _super.prototype.deleteResponseAsync.call(this, url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.genericGetResponseAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.genericMapper).mapGenericResponse;
                        return [4 /*yield*/, _super.prototype.getResponseAsync.call(this, url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.genericPutResponseAsync = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.genericMapper).mapGenericResponse;
                        return [4 /*yield*/, _super.prototype.putResponseAsync.call(this, url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.getListAllResponseAsync = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var responses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getListAllResponseInternalAsync({
                            resolvedResponses: [],
                            getResponse: data.getResponse,
                            xContinuationToken: undefined,
                            listQueryConfig: data.listQueryConfig
                        })];
                    case 1:
                        responses = _a.sent();
                        return [2 /*return*/, data.allResponseFactory(responses.reduce(function (prev, current) {
                                prev.push.apply(prev, current.data.items);
                                return prev;
                            }, []), responses)];
                }
            });
        });
    };
    ManagementQueryService.prototype.publishLanguageVariantAsync = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.workflowMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.createNewVersionOfLanguageVariantAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.workflowMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, undefined, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.unpublishLanguageVariantAsync = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.workflowMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.cancelScheduledPublishingOfLanguageVariantAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.workflowMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, undefined, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.cancelScheduledUnpublishingOfLanguageVariantAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.workflowMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, undefined, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.changeWorkflowStepOfLanguageVariantAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.workflowMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, undefined, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.changeWorkflowOfLanguageVariantAsync = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.workflowMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listWorkflowStepsAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.workflowMapper).mapListWorkflowStepsResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listWorkflowsAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.workflowMapper).mapListWorkflowsResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.addWorkflowAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.workflowMapper).mapAddWorkflowResponse;
                        return [4 /*yield*/, this.postResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.updateWorkflowAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.workflowMapper).mapUpdateWorkflowResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.deleteWorkflowAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = webhook_mapper_1.webhookMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.deleteResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.viewContentTypeSnippetAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentTypeSnippetMapper).mapViewContentTypeSnippetResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.deleteContentTypeSnippetAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentTypeSnippetMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.deleteResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.addContentTypeSnippetAsync = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentTypeSnippetMapper).mapAddContentTypeSnippetResponse;
                        return [4 /*yield*/, this.postResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listContentTypeSnippetsAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentTypeSnippetMapper).mapListingResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.projectInformationAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.projectMapper).mapProjectInformationResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listProjectValidationIssuesAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.projectMapper).mapProjectValidationIssuesListResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.startProjectValidationAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.projectMapper).mapStartProjectValidationResponse;
                        return [4 /*yield*/, this.postResponseAsync(url, {}, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.checkProjectValidationAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.projectMapper).mapCheckProjectValidationResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.validateProjectContentAsync = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.projectMapper).mapValidateProjectContentResponse;
                        return [4 /*yield*/, this.postResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.addContentTypeAsync = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentTypeMapper).mapAddContentTypeResponse;
                        return [4 /*yield*/, this.postResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.deleteContentTypeAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentTypeMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.deleteResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.modifyContentTypeAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentTypeMapper).mapModifyContentTypeResponse;
                        return [4 /*yield*/, this.patchResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.modifyTaxonomyAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.taxonomyMappper).mapModifyTaxonomyResponse;
                        return [4 /*yield*/, this.patchResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.modifyContentTypeSnippetAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentTypeSnippetMapper).mapModifyContentTypeSnippetResponse;
                        return [4 /*yield*/, this.patchResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.viewContentTypeAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentTypeMapper).mapViewContentTypeResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listContentTypesAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentTypeMapper).mapListingResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listAssetRenditionsAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.assetRenditionMapper).mapListAssetRenditionsResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.viewAssetRenditionAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.assetRenditionMapper).mapViewAssetRenditionResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.addAssetRenditionAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.assetRenditionMapper).mapAddAssetRenditionResponse;
                        return [4 /*yield*/, this.postResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.modifyAssetRenditionAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.assetRenditionMapper).mapModifyAssetRenditionResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.addTaxonomyAsync = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.taxonomyMappper).mapAddTaxonomyResponse;
                        return [4 /*yield*/, this.postResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.deleteTaxonomyAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.taxonomyMappper).mapEmptyResponse;
                        return [4 /*yield*/, this.deleteResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.getTaxonomyAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.taxonomyMappper).mapGetTaxonomyResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listTaxonomiesAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.taxonomyMappper).mapListingTaxonomysResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.deleteAssetAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.assetsMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.deleteResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.upsertAssetAsync = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.assetsMapper).mapUpsertAssetResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.addAssetAsync = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.assetsMapper).mapAddAssetResponse;
                        return [4 /*yield*/, this.postResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listSubscriptionProjectsAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.subscriptionMapper).mapSubscriptionProjectsListResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.litSubscriptionUsersAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.subscriptionMapper).mapSubscriptionUsersListResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.viewSubscriptionProjectAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.subscriptionMapper).mapViewSubscriptionProjectResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.viewSubscriptionUserAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.subscriptionMapper).mapViewSubscriptionUserResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.activateUserInAllProjectsAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentItemsMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, {}, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.deactivateUserInAllProjectsAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentItemsMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, {}, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.uploadAssetFromUrlAsync = function (uploadBinaryFileUrl, addAssetUrl, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var binaryData, mimeType, configForUploadBinaryFile, uploadedBinaryFileResponse, assetResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.getBinaryDataFromUrlAsync.call(this, data.fileUrl)];
                    case 1:
                        binaryData = _a.sent();
                        mimeType = _super.prototype.getMimeTypeFromFilename.call(this, data.binaryFile.filename);
                        if (!mimeType) {
                            throw Error("Could not get MIME type for filename '".concat(data.binaryFile.filename, "'. Please include extension in your filename (e.g. myfile.png)"));
                        }
                        configForUploadBinaryFile = JSON.parse(JSON.stringify(config));
                        return [4 /*yield*/, this.uploadBinaryFileAsync(uploadBinaryFileUrl, {
                                binaryData: binaryData,
                                contentType: mimeType,
                                filename: data.binaryFile.filename,
                                contentLength: binaryData.byteLength
                            }, configForUploadBinaryFile)];
                    case 2:
                        uploadedBinaryFileResponse = _a.sent();
                        return [4 /*yield*/, this.addAssetAsync(addAssetUrl, {
                                file_reference: {
                                    id: uploadedBinaryFileResponse.data.id,
                                    type: uploadedBinaryFileResponse.data.type
                                },
                                descriptions: data.asset.descriptions,
                                external_id: data.asset.external_id,
                                folder: data.asset.folder,
                                title: data.asset.title
                            }, config)];
                    case 3:
                        assetResponse = _a.sent();
                        return [2 /*return*/, assetResponse];
                }
            });
        });
    };
    ManagementQueryService.prototype.uploadBinaryFileAsync = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        config.headers.push({
                            header: 'Content-type',
                            value: data.contentType
                        });
                        if (data.contentLength) {
                            config.headers.push({ header: 'Content-length', value: data.contentLength.toString() });
                        }
                        _b = (_a = mappers_1.assetsMapper).mapUploadBinaryFileResponse;
                        return [4 /*yield*/, this.postResponseAsync(url, data.binaryData, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.viewAssetAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.assetsMapper).mapViewAssetResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listAssetsAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.assetsMapper).mapListingAssetsResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listContentItemsAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentItemsMapper).mapListingItemsResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.viewContentItemAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentItemsMapper).mapViewContentItemResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.addContentItemAsync = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentItemsMapper).mapAddContentItemResponse;
                        return [4 /*yield*/, this.postResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.upsertContentItemAsync = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentItemsMapper).mapUpsertContentItemResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.updateContentItemAsync = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentItemsMapper).mapUpdateContentItemResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.deleteContentItemAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentItemsMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.deleteResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.deleteLanguageVariantAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.contentItemsMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.deleteResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.upsertLanguageVariantAsync = function (url, 
    // elements: LanguageVariantElements.ILanguageVariantElementBase[],
    data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.languageVariantMapper).mapUpsertLanguageVariantResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.viewLanguageVariantAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.languageVariantMapper).mapViewLanguageVariantResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listLanguageVariantsOfItemAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.languageVariantMapper).mapLanguageVariantsOfItemResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listLanguageVariantsOfContentTypeWithComponentsAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.languageVariantMapper).mapLanguageVariantsOfContentTypeWithComponentsResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listLanguageVariantsOfContentTypeAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.languageVariantMapper).mapLanguageVariantsOfContentTypeResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listLanguageVariantsByCollectionAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.languageVariantMapper).mapLanguageVariantsByCollectionResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listLanguagesAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.languageMapper).mapListLanguagesResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.viewLanguageAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.languageMapper).mapViewLanguageResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.addLanguageAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.languageMapper).mapAddLanguageResponse;
                        return [4 /*yield*/, this.postResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.modifyLanguageAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.languageMapper).mapModifyLanguageResponse;
                        return [4 /*yield*/, this.patchResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listWebhooksAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = webhook_mapper_1.webhookMapper).mapWebhooksListResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.getWebhookAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = webhook_mapper_1.webhookMapper).mapGetWebhookResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.addWebhookAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = webhook_mapper_1.webhookMapper).mapAddWebhookResponse;
                        return [4 /*yield*/, this.postResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.enableWebhookAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = webhook_mapper_1.webhookMapper).mapEnableWebhookResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, {}, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.disableWebhookAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = webhook_mapper_1.webhookMapper).mapDisableWebhookResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, {}, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.deleteWebhookAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = webhook_mapper_1.webhookMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.deleteResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listAssetFoldersAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.assetFolderMapper).mapListAssetFoldersResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.addAssetFoldersAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.assetFolderMapper).mapAddAssetFoldersResponse;
                        return [4 /*yield*/, this.postResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.modifyAssetFoldersAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.assetFolderMapper).mapModifyAssetFoldersResponse;
                        return [4 /*yield*/, this.patchResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listCollectionsAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.collectionsMappers).mapListCollectionsResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.listRolesAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.roleMapper).mapRoleListResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.viewRoleAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.roleMapper).mapViewRoleResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.setCollectionsAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.collectionsMappers).mapSetCollectionsResponse;
                        return [4 /*yield*/, this.patchResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.inviteProjectUserAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.projectUserMapper).mapInviteUserResponse;
                        return [4 /*yield*/, this.postResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.changeUserRolesAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = mappers_1.projectUserMapper).mapChangeUserRolesResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.getEnvironmentCloningStateAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = environment_mapper_1.environmentMapper).mapGetEnvironmentCloningStateResponse;
                        return [4 /*yield*/, this.getResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.deleteEnvironmentAsync = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = environment_mapper_1.environmentMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.deleteResponseAsync(url, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.modifyEnvironmentAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = environment_mapper_1.environmentMapper).mapModifyEnvironmentResponse;
                        return [4 /*yield*/, this.patchResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.cloneEnvironmentAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = environment_mapper_1.environmentMapper).mapCloneEnvironmentResponse;
                        return [4 /*yield*/, this.postResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.markEnvironmentAsProductionAsync = function (url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = environment_mapper_1.environmentMapper).mapEmptyResponse;
                        return [4 /*yield*/, this.putResponseAsync(url, data, {}, config)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ManagementQueryService.prototype.getListAllResponseInternalAsync = function (data) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, data.getResponse(data.xContinuationToken)];
                    case 1:
                        response = _c.sent();
                        if (!((_a = data.listQueryConfig) === null || _a === void 0 ? void 0 : _a.delayBetweenRequests)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.sleepAsync(data.listQueryConfig.delayBetweenRequests)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        data.resolvedResponses.push(response);
                        if ((_b = data.listQueryConfig) === null || _b === void 0 ? void 0 : _b.responseFetched) {
                            data.listQueryConfig.responseFetched(response, data.xContinuationToken);
                        }
                        if (!response.data.pagination.continuationToken) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getListAllResponseInternalAsync({
                                xContinuationToken: response.data.pagination.continuationToken,
                                getResponse: data.getResponse,
                                resolvedResponses: data.resolvedResponses
                            })];
                    case 4: 
                    // recursively fetch next page data
                    return [2 /*return*/, _c.sent()];
                    case 5: return [2 /*return*/, data.resolvedResponses];
                }
            });
        });
    };
    ManagementQueryService.prototype.sleepAsync = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ManagementQueryService;
}(base_management_service_class_1.BaseManagementQueryService));
exports.ManagementQueryService = ManagementQueryService;
