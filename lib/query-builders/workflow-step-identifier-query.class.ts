import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';

export class WorkflowStepIdentifierQuery<TResult> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ManagementQueryService,
            identifier: Identifiers.WorkflowIdentifier
        ) => TResult
    ) {}

    /**
     * Id identifier
     * @param id If of the workflow step
     */
    byWorkflowStepId(id: string): TResult {
        return this.buildResult(
            this.config,
            this.queryService,
            new Identifiers.WorkflowIdentifier(Identifiers.WorkflowIdentifierEnum.Id, id)
        );
    }

    /**
     * Codename identifier
     * @param codename codename of the workflow step
     */
    byWorkflowStepCodename(codename: string): TResult {
        return this.buildResult(
            this.config,
            this.queryService,
            new Identifiers.WorkflowIdentifier(Identifiers.WorkflowIdentifierEnum.Codename, codename)
        );
    }
}
