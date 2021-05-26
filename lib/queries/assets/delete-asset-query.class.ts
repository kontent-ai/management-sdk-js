

import { IManagementClientConfig } from '../../config';
import { contentManagementApiEndpoints, Identifiers } from '../../models';
import { BaseResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class DeleteAssetQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public identifier: Identifiers.AssetIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<BaseResponses.EmptyContentManagementResponse> {
        return this.queryService.deleteAsset(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return contentManagementApiEndpoints.deleteAsset(this.identifier);
    }
}
