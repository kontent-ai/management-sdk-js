import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ContentManagementQueryService } from '../services';

export class WebhookIdentifierQuery<TResult> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ContentManagementQueryService,
            identifier: Identifiers.WebhookIdentifier
        ) => TResult
    ) {}

    /**
     * Id identifier
     * @param id Id of the webhook
     */
    byId(id: string): TResult {
        return this.buildResult(
            this.config,
            this.queryService,
            new Identifiers.WebhookIdentifier(Identifiers.WebhookIdentifierEnum.Id, id)
        );
    }
}
