import { ElementModels } from '../elements/elements.models';
import { SharedModels } from '../shared/shared-models';
import { LanguageVariantContracts } from '../../contracts';

export namespace LanguageVariantModels {
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
        implements SharedModels.IBaseModel<LanguageVariantContracts.ILanguageVariantModelContract>
    {
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
        public _raw!: LanguageVariantContracts.ILanguageVariantModelContract;

        constructor(data: {
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
