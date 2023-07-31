import { SharedModels } from '../shared/shared-models';
import { SharedContracts, WorkflowContracts } from '../../contracts';

export namespace WorkflowModels {

    export interface LanguageVariantWorkflow {
        workflowOdentifier: SharedContracts.ICodenameIdReferenceContract;
        stepIdentifier: SharedContracts.ICodenameIdReferenceContract;
    }

    export class WorkflowStep implements SharedModels.IBaseModel<WorkflowContracts.IWorkflowStepContract> {
        public id!: string;
        public name!: string;
        public codename!: string;
        public transitionsTo!: string[];
        public _raw!: WorkflowContracts.IWorkflowStepContract;

        constructor(data: {
            id: string;
            name: string;
            codename: string;
            transitionsTo: string[];
            _raw: WorkflowContracts.IWorkflowStepContract;
        }) {
            Object.assign(this, data);
        }
    }

    export class Workflow implements SharedModels.IBaseModel<WorkflowContracts.IWorkflowContract> {
        public id!: string;
        public name!: string;
        public codename!: string;
        public scopes!: WorkflowContracts.IWorkflowScopeContract[];
        public steps!: WorkflowContracts.IWorkflowStepNewContract[];
        public publishedStep!: WorkflowContracts.IWorkflowPublishedStepContract;
        public scheduledStep!: WorkflowContracts.IWorkflowScheduledStepContract;
        public archivedStep!: WorkflowContracts.IWorkflowArchivedStepContract;
        public _raw!: WorkflowContracts.IWorkflowContract;

        constructor(data: {
            id: string;
            name: string;
            codename: string;
            scopes: WorkflowContracts.IWorkflowScopeContract[];
            steps: WorkflowContracts.IWorkflowStepNewContract[];
            publishedStep: WorkflowContracts.IWorkflowPublishedStepContract;
            scheduledStep: WorkflowContracts.IWorkflowScheduledStepContract;
            archivedStep: WorkflowContracts.IWorkflowArchivedStepContract;
            _raw: WorkflowContracts.IWorkflowContract;
        }) {
            Object.assign(this, data);
        }
    }

    export interface IPublishLanguageVariantData {
        /**
         * ISO-8601 formatted date/time. Example: 2019-01-31T11:00:00+01:00.
         * If you do not provide this property, the specified language variant is published immediately.
         */
        scheduled_to?: string;
    }

    export interface IUnpublishLanguageVarianthData {
        /**
         * ISO-8601 formatted date/time. Example: 2019-01-31T11:00:00+01:00.
         * If you do not provide this property, the specified language variant is published immediately.
         */
        scheduled_to?: string;
    }

    export interface IChangeWorkflowOfLanguageVariantData {
        workflow_identifier: {
            id?: string;
            codename?: string;
        };
        step_identifier: SharedContracts.IReferenceObjectContract;
    }

    export interface IAddWorkflowData {
        name: string;
        codename?: string;
        scopes: {
            content_types: SharedContracts.IReferenceObjectContract[];
            collections?: SharedContracts.IReferenceObjectContract[];
        }[];
        steps: {
            name: string;
            codename: string;
            color: WorkflowContracts.WorkflowColor;
            transitions_to: {
                step: {
                    codename?: string;
                };
            }[];
            role_ids: string[];
        }[];
        published_step: {
            id?: string;
            name?: string;
            codename?: string;
            create_new_version_role_ids?: string[];
            unpublish_role_ids?: string[];
        };
        archived_step: {
            id?: string;
            name?: string;
            codename?: string;
            role_ids?: string[];
        };
    }

    export interface IUpdateWorkflowData {
        name: string;
        codename?: string;
        scopes: {
            content_types: SharedContracts.IReferenceObjectContract[];
            collections?: SharedContracts.IReferenceObjectContract[];
        }[];
        steps: {
            id?: string;
            name: string;
            codename: string;
            color: WorkflowContracts.WorkflowColor;
            transitions_to: {
                step: {
                    id?: string;
                    codename?: string;
                };
            }[];
            role_ids: string[];
        }[];
        published_step: {
            id?: string;
            name?: string;
            codename?: string;
            create_new_version_role_ids?: string[];
            unpublish_role_ids?: string[];
        };
        archived_step: {
            id?: string;
            name?: string;
            codename?: string;
            role_ids?: string[];
        };
    }
}
