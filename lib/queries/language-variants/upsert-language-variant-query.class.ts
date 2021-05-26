import { LanguageVariantElements, LanguageVariantElementsBuilder, languageVariantElementsBuilder } from '../../models/language-variants/language-variant-elements-builder';


import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageVariantResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class UpsertLanguageVariantQuery extends BaseQuery<LanguageVariantResponses.UpsertLanguageVariantResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ContentManagementQueryService,
    protected contentItemIdentifier: Identifiers.ContentItemIdentifier,
    protected languageIdentifier: Identifiers.LanguageIdentifier,
    public data: (builder: LanguageVariantElementsBuilder) => LanguageVariantElements.ILanguageVariantElementBase[],
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<LanguageVariantResponses.UpsertLanguageVariantResponse> {
    return this.queryService.upsertLanguageVariant(this.getUrl(), this.data(languageVariantElementsBuilder), this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.viewOrUpsertLanguageVariant(this.contentItemIdentifier, this.languageIdentifier);
  }
}


