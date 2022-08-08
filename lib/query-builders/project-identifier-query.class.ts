import { Identifiers } from '../models/identifiers';
import { IManagementClientConfig } from '../config';
import { ContentManagementQueryService } from '../services';

export class ProjectIdentifierQuery<TResult> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ContentManagementQueryService,
            itentifier: Identifiers.ProjectIdentifier
        ) => TResult
    ) {}

    /**
     * For given Project by id
     * @param projectId ProjectId
     */
    projectId(projectId: string): TResult {
        return this.buildResult(
            this.config,
            this.queryService,
            new Identifiers.ProjectIdentifier(Identifiers.ProjectIdentifierEnum.Id, projectId)
        );
    }
}
