import {
    AssetFolderMapper,
    assetFolderMapper,
    AssetsMapper,
    assetsMapper,
    ContentItemsMapper,
    contentItemsMapper,
    ContentTypeMapper,
    contentTypeMapper,
    ContentTypeSnippetMapper,
    contentTypeSnippetMapper,
    ElementsMapper,
    elementsMapper,
    LanguageMapper,
    languageMapper,
    LanguageVariantMapper,
    languageVariantMapper,
    ProjectMapper,
    projectMapper,
    TaxonomyMapper,
    taxonomyMappper,
    WebhookMapper,
    webhookMapper,
    WorkflowMapper,
    workflowMapper,
} from '../mappers';

export interface IMappingService {
    assetFoldersMapper: AssetFolderMapper;
    assetsMapper: AssetsMapper;
    contentItemsMapper: ContentItemsMapper;
    contentTypeMapper: ContentTypeMapper;
    contentTypeSnippetMapper: ContentTypeSnippetMapper;
    elementsMapper: ElementsMapper;
    languageMapper: LanguageMapper;
    languageVariantMapper: LanguageVariantMapper;
    projectMapper: ProjectMapper;
    taxonomyMapper: TaxonomyMapper;
    webhookMapper: WebhookMapper;
    workflowMapper: WorkflowMapper;
}

export class MappingService implements IMappingService {
    public assetFoldersMapper: AssetFolderMapper;
    public assetsMapper: AssetsMapper;
    public contentItemsMapper: ContentItemsMapper;
    public contentTypeMapper: ContentTypeMapper;
    public contentTypeSnippetMapper: ContentTypeSnippetMapper;
    public elementsMapper: ElementsMapper;
    public languageMapper: LanguageMapper;
    public languageVariantMapper: LanguageVariantMapper;
    public projectMapper: ProjectMapper;
    public taxonomyMapper: TaxonomyMapper;
    public webhookMapper: WebhookMapper;
    public workflowMapper: WorkflowMapper;

    constructor() {
        this.assetFoldersMapper = assetFolderMapper;
        this.assetsMapper = assetsMapper;
        this.contentItemsMapper = contentItemsMapper;
        this.contentTypeMapper = contentTypeMapper;
        this.contentTypeSnippetMapper = contentTypeSnippetMapper;
        this.elementsMapper = elementsMapper;
        this.languageMapper = languageMapper;
        this.languageVariantMapper = languageVariantMapper;
        this.projectMapper = projectMapper;
        this.taxonomyMapper = taxonomyMappper;
        this.webhookMapper = webhookMapper;
        this.workflowMapper = workflowMapper;
    }
}
