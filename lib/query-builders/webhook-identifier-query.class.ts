import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';

export class WebhookIdentifierQuery<TResult> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ManagementQueryService,
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
