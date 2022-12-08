"use strict";
exports.__esModule = true;
exports.MappingService = void 0;
var mappers_1 = require("../mappers");
var MappingService = /** @class */ (function () {
    function MappingService() {
        this.assetFoldersMapper = mappers_1.assetFolderMapper;
        this.assetsMapper = mappers_1.assetsMapper;
        this.contentItemsMapper = mappers_1.contentItemsMapper;
        this.contentTypeMapper = mappers_1.contentTypeMapper;
        this.contentTypeSnippetMapper = mappers_1.contentTypeSnippetMapper;
        this.elementsMapper = mappers_1.elementsMapper;
        this.languageMapper = mappers_1.languageMapper;
        this.languageVariantMapper = mappers_1.languageVariantMapper;
        this.projectMapper = mappers_1.projectMapper;
        this.taxonomyMapper = mappers_1.taxonomyMappper;
        this.webhookMapper = mappers_1.webhookMapper;
        this.workflowMapper = mappers_1.workflowMapper;
    }
    return MappingService;
}());
exports.MappingService = MappingService;
