import { ElementModels } from '../elements/elements.models';
import { SharedModels } from '../shared/shared-models';
import { LanguageVariantContracts, SharedContracts } from '../../contracts';

export namespace LanguageVariantModels {

    export type FilterLanguageVariantsCompletionStatus = 'unfinished' | 'completed' | 'not_translated' | 'all_done';
    export type FilterLanguageVariantsOrderBy = 'last_modified' | 'name' | 'due_date';
    export type FilterLanguageVariantsOrderDirection = 'asc' | 'desc';

    export interface IFilterLanguageVariantsData {
        filters?: {
            search_phrase?: string;
            language?: SharedContracts.IReferenceObjectContract;
            content_types?: SharedContracts.IReferenceObjectContract[];
            contributors?: SharedContracts.UserReferenceDataContract[];
            has_no_contributors?: boolean;
            completion_statuses?: FilterLanguageVariantsCompletionStatus[];
            workflow_steps?: SharedContracts.IWorkflowStepsReferenceContract[];
            taxonomy_groups?: SharedContracts.ITaxonomyGroupReferenceContract[];
        };
        order?: {
            by?: FilterLanguageVariantsOrderBy
            direction?: FilterLanguageVariantsOrderDirection
        }
        include_content?: boolean;
    }

    export interface ILanguageVariantElementInfo {
        id?: string;
        codename?: string;
        external_id?: string;
    }

    export interface ILanguageVariantSchedule {
        publishTime: string | null;
        publishDisplayTimezone: string | null;
        unpublishTime: string | null;
        unpublishDisplayTimezone: string | null;
    }

    export interface ILanguageVariantDueDate {
        value: string | null;
    }

    export class ContentItemLanguageVariant
        implements SharedModels.IBaseModel<LanguageVariantContracts.ILanguageVariantModelContract> {
        public item!: SharedModels.ReferenceObject;
        public elements!: ElementModels.ContentItemElement[];
        public language!: SharedModels.ReferenceObject;
        public lastModified!: Date;
        public workflow!: {
            workflowIdentifier: SharedModels.ReferenceObject;
            stepIdentifier: SharedModels.ReferenceObject;
        };
        public schedule!: ILanguageVariantSchedule;
        public dueDate!: ILanguageVariantDueDate;
        public note?: string;
        public contributors!: SharedContracts.UserReferenceContract[];
        public _raw!: LanguageVariantContracts.ILanguageVariantModelContract;

        constructor(data: {
            item: SharedModels.ReferenceObject;
            elements: ElementModels.ContentItemElement[];
            language: SharedModels.ReferenceObject;
            lastModified: Date;
            schedule: ILanguageVariantSchedule;
            dueDate: ILanguageVariantDueDate;
            note?: string;
            contributors: SharedContracts.UserReferenceContract[];
            workflow: {
                workflowIdentifier: SharedModels.ReferenceObject;
                stepIdentifier: SharedModels.ReferenceObject;
            };
            _raw: LanguageVariantContracts.ILanguageVariantModelContract;
        }) {
            Object.assign(this, data);
        }
    }

    export class ContentItemLanguageWithComponentsVariant {
        public item!: SharedModels.ReferenceObject;
        public elements!: ElementModels.ContentItemElement[];
        public language!: SharedModels.ReferenceObject;
        public lastModified!: Date;
        public schedule!: ILanguageVariantSchedule;
        public dueDate!: ILanguageVariantDueDate;
        public workflow!: {
            workflowIdentifier: SharedModels.ReferenceObject;
            stepIdentifier: SharedModels.ReferenceObject;
        };
        public _raw!: LanguageVariantContracts.ILanguageVariantModelsContract;

        constructor(data: {
            rawElements: any;
            item: SharedModels.ReferenceObject;
            elements: ElementModels.ContentItemElement[];
            language: SharedModels.ReferenceObject;
            lastModified: Date;
            schedule: ILanguageVariantSchedule;
            dueDate: ILanguageVariantDueDate;
            workflow: {
                workflowIdentifier: SharedModels.ReferenceObject;
                stepIdentifier: SharedModels.ReferenceObject;
            };
            _raw: LanguageVariantContracts.ILanguageVariantModelsContract;
        }) {
            Object.assign(this, data);
        }
    }
}
