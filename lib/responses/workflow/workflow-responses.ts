import { WorkflowContracts } from '../../contracts/workflow-contracts';
import { WorkflowModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace WorkflowResponses {
    export class ListWorkflowsResponse extends BaseResponses.BaseContentManagementResponse<
        WorkflowContracts.IListWorkflowsResponseContract,
        WorkflowModels.Workflow[]
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: WorkflowContracts.IListWorkflowsResponseContract,
            data: WorkflowModels.Workflow[]
        ) {
            super(debug, rawData, data);
        }
    }

    export class AddWorkflowResponse extends BaseResponses.BaseContentManagementResponse<
        WorkflowContracts.IAddWorkflowContract,
        WorkflowModels.Workflow
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: WorkflowContracts.IAddWorkflowContract,
            data: WorkflowModels.Workflow
        ) {
            super(debug, rawData, data);
        }
    }

    export class UpdateWorkflowResponse extends BaseResponses.BaseContentManagementResponse<
        WorkflowContracts.IUpdateWorkflowContract,
        WorkflowModels.Workflow
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: WorkflowContracts.IUpdateWorkflowContract,
            data: WorkflowModels.Workflow
        ) {
            super(debug, rawData, data);
        }
    }
}
