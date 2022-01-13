import { Identifiers } from '../../models';
import { IManagementClientConfig } from '../../config';
import { ProjectResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ValidateProjectContentQuery extends BaseQuery<ProjectResponses.ValidateProjectContentResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public identifier: Identifiers.ProjectIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<ProjectResponses.ValidateProjectContentResponse> {
        return this.queryService.validateProjectContent(
            this.getUrl(),
            {
                projectId: this.identifier.value
            },
            this.queryConfig
        );
    }

    protected getAction(): string {
        return this.apiEndpoints.validateProjectContent();
    }
}
