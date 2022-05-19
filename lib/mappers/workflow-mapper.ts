import { IResponse } from '@kentico/kontent-core';

import { WorkflowContracts } from '../contracts/workflow-contracts';
import { WorkflowModels } from '../models';
import { WorkflowResponses } from '../responses';
import { BaseMapper } from './base-mapper';

export class WorkflowMapper extends BaseMapper {
    mapListWorkflowStepsResponse(
        response: IResponse<WorkflowContracts.IListWorkflowStepsResponseContract>
    ): WorkflowResponses.ListWorkflowStepsResponse {
        const workflowSteps = response.data.map((m) => this.mapWorkflowStep(m));

        return new WorkflowResponses.ListWorkflowStepsResponse(
            super.mapResponseDebug(response),
            response.data,
            workflowSteps
        );
    }

    mapListWorkflowsResponse(
        response: IResponse<WorkflowContracts.IListWorkflowsResponseContract>
    ): WorkflowResponses.ListWorkflowsResponse {
        const workflows = response.data.map((m) => this.mapWorkflow(m));

        return new WorkflowResponses.ListWorkflowsResponse(super.mapResponseDebug(response), response.data, workflows);
    }

    mapAddWorkflowResponse(
        response: IResponse<WorkflowContracts.IAddWorkflowContract>
    ): WorkflowResponses.AddWorkflowResponse {
        return new WorkflowResponses.AddWorkflowResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapWorkflow(response.data)
        );
    }

    mapUpdateWorkflowResponse(
        response: IResponse<WorkflowContracts.IUpdateWorkflowContract>
    ): WorkflowResponses.UpdateWorkflowResponse {
        return new WorkflowResponses.UpdateWorkflowResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapWorkflow(response.data)
        );
    }

    mapWorkflowStep(rawStep: WorkflowContracts.IWorkflowStepContract): WorkflowModels.WorkflowStep {
        return new WorkflowModels.WorkflowStep({
            id: rawStep.id,
            name: rawStep.name,
            codename: rawStep.codename,
            transitionsTo: rawStep.transitions_to,
            _raw: rawStep
        });
    }

    mapWorkflow(raw: WorkflowContracts.IWorkflowContract): WorkflowModels.Workflow {
        return new WorkflowModels.Workflow({
            id: raw.id,
            name: raw.name,
            codename: raw.codename,
            archivedStep: raw.archived_step,
            publishedStep: raw.published_step,
            scopes: raw.scopes,
            steps: raw.steps,
            _raw: raw
        });
    }
}

export const workflowMapper = new WorkflowMapper();
