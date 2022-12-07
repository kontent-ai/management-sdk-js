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
var lib_1 = require("../../../lib");
var jsonResponse = require("../fake-responses/language-variants/fake-upsert-language-variant.json");
var setup_1 = require("../setup");
describe('Upsert language variant', function () {
    var response;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, setup_1.getTestClientWithJson)(jsonResponse)
                        .upsertLanguageVariant()
                        .byItemCodename('x')
                        .byLanguageCodename('x')
                        .withData(function (builder) {
                        return {
                            elements: [
                                builder.textElement({
                                    element: {
                                        codename: 'xElementCodename'
                                    },
                                    value: 'xText'
                                }),
                                builder.richTextElement({
                                    element: {
                                        codename: 'x'
                                    },
                                    value: '<p>yyy<p>',
                                    components: [
                                        {
                                            id: 'xzy',
                                            type: {
                                                codename: 'y'
                                            },
                                            elements: [
                                                {
                                                    element: {
                                                        codename: 'y'
                                                    },
                                                    value: 'y'
                                                }
                                            ]
                                        }
                                    ]
                                }),
                                builder.numberElement({
                                    element: {
                                        codename: 'zElementCodename'
                                    },
                                    value: 9
                                }),
                                builder.urlSlugElement({
                                    element: {
                                        codename: 'yElementCodename'
                                    },
                                    mode: 'autogenerated',
                                    value: 'xUrlSlug'
                                }),
                                {
                                    element: {
                                        codename: 'personas'
                                    },
                                    value: [
                                        {
                                            codename: 'barista'
                                        },
                                        {
                                            codename: 'coffee_blogger'
                                        }
                                    ]
                                }
                            ]
                        };
                    })
                        .toPromise()];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("url should be correct", function () {
        var codenameUrlWithCodenameLanguage = setup_1.cmLiveClient
            .upsertLanguageVariant()
            .byItemCodename('xCodename')
            .byLanguageCodename('xLanguageCodename')
            .withData(function (builder) { return { elements: [] }; })
            .getUrl();
        var internalIdUrlWithCodenameLanguage = setup_1.cmLiveClient
            .upsertLanguageVariant()
            .byItemId('xItemId')
            .byLanguageCodename('xLanguageCodename')
            .withData(function (builder) { return { elements: [] }; })
            .getUrl();
        var externalIdUrlWithCodenameLanguage = setup_1.cmLiveClient
            .upsertLanguageVariant()
            .byItemExternalId('XItemExternal')
            .byLanguageCodename('xLanguageCodename')
            .withData(function (builder) { return { elements: [] }; })
            .getUrl();
        var codenameUrlWithIdLanguage = setup_1.cmLiveClient
            .upsertLanguageVariant()
            .byItemCodename('xCodename')
            .byLanguageId('xLanguageId')
            .withData(function (builder) { return { elements: [] }; })
            .getUrl();
        var internalIdUrlWithIdLanguage = setup_1.cmLiveClient
            .upsertLanguageVariant()
            .byItemId('xItemId')
            .byLanguageId('xLanguageId')
            .withData(function (builder) { return { elements: [] }; })
            .getUrl();
        var externalIdUrlWithIdLanguage = setup_1.cmLiveClient
            .upsertLanguageVariant()
            .byItemExternalId('XItemExternal')
            .byLanguageId('xLanguageId')
            .withData(function (builder) { return { elements: [] }; })
            .getUrl();
        expect(codenameUrlWithCodenameLanguage).toEqual("https://manage.kontent.ai/v2/projects/".concat(setup_1.testProjectId, "/items/codename/xCodename/variants/codename/xLanguageCodename"));
        expect(internalIdUrlWithCodenameLanguage).toEqual("https://manage.kontent.ai/v2/projects/".concat(setup_1.testProjectId, "/items/xItemId/variants/codename/xLanguageCodename"));
        expect(externalIdUrlWithCodenameLanguage).toEqual("https://manage.kontent.ai/v2/projects/".concat(setup_1.testProjectId, "/items/external-id/XItemExternal/variants/codename/xLanguageCodename"));
        expect(codenameUrlWithIdLanguage).toEqual("https://manage.kontent.ai/v2/projects/".concat(setup_1.testProjectId, "/items/codename/xCodename/variants/xLanguageId"));
        expect(internalIdUrlWithIdLanguage).toEqual("https://manage.kontent.ai/v2/projects/".concat(setup_1.testProjectId, "/items/xItemId/variants/xLanguageId"));
        expect(externalIdUrlWithIdLanguage).toEqual("https://manage.kontent.ai/v2/projects/".concat(setup_1.testProjectId, "/items/external-id/XItemExternal/variants/xLanguageId"));
    });
    it("response should be instance of UpsertLanguageVariantResponse class", function () {
        expect(response).toEqual(jasmine.any(lib_1.LanguageVariantResponses.UpsertLanguageVariantResponse));
    });
    it("response should contain debug data", function () {
        expect(response.debug).toBeDefined();
    });
    it("response should contain data", function () {
        expect(response.data).toBeDefined();
        expect(response.data.elements).toBeDefined();
        expect(response.data.item).toBeDefined();
        expect(response.data.language).toBeDefined();
        expect(response.data.lastModified).toBeDefined();
    });
    it("item properties should be mapped", function () {
        var variant = response.data;
        var originalItem = jsonResponse;
        if (!originalItem) {
            throw Error("Could not find original item with id '".concat(variant.item.id, "'"));
        }
        expect(variant.item).toBeDefined();
        expect(variant.language).toBeDefined();
        expect(variant.elements).toBeDefined();
        expect(variant.lastModified).toEqual(jasmine.any(Date));
        expect(variant.workflowStep.id).toEqual(originalItem.workflow_step.id);
        expect(variant.item).toEqual(jasmine.any(lib_1.SharedModels.ReferenceObject));
        expect(variant.language).toEqual(jasmine.any(lib_1.SharedModels.ReferenceObject));
        variant.elements.forEach(function (element) {
            var originalElement = originalItem.elements.find(function (m) { return m.element.id === element.element.id; });
            expect(element).toEqual(jasmine.any(lib_1.ElementModels.ContentItemElement));
            if (!originalElement) {
                throw Error("Original element with id '".concat(element.element.id, "' was not found"));
            }
            if (Array.isArray(element.value)) {
                element.value.forEach(function (elementReference) {
                    expect(elementReference).toEqual(jasmine.any(lib_1.SharedModels.ReferenceObject));
                });
            }
            else {
                expect(element.value).toEqual(originalElement.value);
            }
        });
    });
});
