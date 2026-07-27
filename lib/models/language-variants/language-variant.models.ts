import { IHeader } from '@kontent-ai/core-sdk';

import { ElementModels } from '../elements/elements.models';
import { SharedModels } from '../shared/shared-models';
import { LanguageVariantContracts, SharedContracts } from '../../contracts';

export namespace LanguageVariantModels {

    export const agentMetadataHeader: IHeader = { header: 'X-KC-Agent-Metadata', value: 'true' };

    export type FilterLanguageVariantsCompletionStatus = 'unfinished' | 'ready' | 'not_translated' | 'all_done';
    export type FilterLanguageVariantsPublishingState = 'published' | 'unpublished' | 'not_published_yet';
    export type FilterLanguageVariantsOrderBy = 'last_modified' | 'name' | 'due_date';
    export type FilterLanguageVariantsOrderDirection = 'asc' | 'desc';

    export interface IFilterItemsWithVariantsData {
        filters?: {
            search_phrase?: string;
            language?: SharedContracts.IReferenceObjectContract;
            content_types?: SharedContracts.IReferenceObjectContract[];
            contributors?: SharedContracts.UserReferenceDataContract[];
            has_no_contributors?: boolean;
            completion_statuses?: FilterLanguageVariantsCompletionStatus[];
            workflow_steps?: SharedContracts.IRequestWorkflowStepsReferenceContract[];
            taxonomy_groups?: SharedContracts.ITaxonomyGroupReferenceContract[];
            spaces?: SharedContracts.IReferenceObjectContract[];
            collections?: SharedContracts.IReferenceObjectContract[];
            publishing_states?: FilterLanguageVariantsPublishingState[];
            component_types?: SharedContracts.IReferenceObjectContract[];
        };
        order?: {
            by?: FilterLanguageVariantsOrderBy;
            direction?: FilterLanguageVariantsOrderDirection;
        };
    }

    export interface IVariantIdentifier {
        item: SharedContracts.IReferenceObjectContract;
        language: SharedContracts.IReferenceObjectContract;
    }

    export interface IBulkGetItemsWithVariantsData {
        variants: IVariantIdentifier[];
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

    export interface ILanguageVariantAgentMetadata {
        editability: ILanguageVariantEditability;
    }

    export interface ILanguageVariantEditability {
        isEditable: boolean;
        guidance: string;
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
        public note?: string | null;
        public contributors!: SharedContracts.UserReferenceContract[];
        public agentMetadata?: ILanguageVariantAgentMetadata;
        public _raw!: LanguageVariantContracts.ILanguageVariantModelContract;

        constructor(data: {
            item: SharedModels.ReferenceObject;
            elements: ElementModels.ContentItemElement[];
            language: SharedModels.ReferenceObject;
            lastModified: Date;
            schedule: ILanguageVariantSchedule;
            dueDate: ILanguageVariantDueDate;
            note?: string | null;
            contributors: SharedContracts.UserReferenceContract[];
            agentMetadata?: ILanguageVariantAgentMetadata;
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
        public agentMetadata?: ILanguageVariantAgentMetadata;
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
            agentMetadata?: ILanguageVariantAgentMetadata;
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
