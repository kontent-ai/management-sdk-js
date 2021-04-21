import { SharedModels } from '../shared/shared-models';
import { WorkflowContracts } from '../../contracts';

export namespace WorkflowModels {

    export class WorkflowStep implements SharedModels.IBaseModel<WorkflowContracts.IWorkflowStepContract> {

        public id!: string;
        public name!: string;
        public codename!: string;
        public transitionsTo!: string[];
        public _raw!: WorkflowContracts.IWorkflowStepContract;

        constructor(data: {
            id: string,
            name: string,
            codename: string;
            transitionsTo: string[],
            _raw: WorkflowContracts.IWorkflowStepContract
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

}
