import { ElementModels } from '../elements/elements.models';
import { SharedModels } from '../shared/shared-models';
import { LanguageVariantContracts } from '../../contracts';

export namespace LanguageVariantModels {

    export interface ILangaugeVariantReference {
        id?: string;
        codename?: string;
        external_id?: string;
    }

    export interface ILanguageVariantElementInfo {
        id?: string;
        codename?: string;
        external_id?: string;
    }

    export class ContentItemLanguageVariant implements SharedModels.IBaseModel<LanguageVariantContracts.ILanguageVariantModelContract> {
        public item!: SharedModels.ReferenceObject;
        public elements!: ElementModels.ContentItemElement[];
        public language!: SharedModels.ReferenceObject;
        public lastModified!: Date;
        public workflowStep!: SharedModels.ReferenceObject;
        public _raw!: LanguageVariantContracts.ILanguageVariantModelContract;

        constructor(
            data: {
                rawElements: any,
                item: SharedModels.ReferenceObject,
                elements: ElementModels.ContentItemElement[],
                language: SharedModels.ReferenceObject,
                lastModified: Date,
                workflowStep: SharedModels.ReferenceObject,
                _raw: LanguageVariantContracts.ILanguageVariantModelContract
            }
        ) {
            Object.assign(this, data);
        }
    }

    export class ContentItemLanguageWithComponentsVariant {
        public item!: SharedModels.ReferenceObject;
        public elements!: ElementModels.ContentItemElementWithComponents[];
        public language!: SharedModels.ReferenceObject;
        public lastModified!: Date;
        public workflowStep!: SharedModels.ReferenceObject;
        public _raw!: LanguageVariantContracts.ILanguageVariantModelWithComponentsContract;

        constructor(
            data: {
                rawElements: any,
                item: SharedModels.ReferenceObject,
                elements: ElementModels.ContentItemElementWithComponents[],
                language: SharedModels.ReferenceObject,
                lastModified: Date,
                workflowStep: SharedModels.ReferenceObject,
                _raw: LanguageVariantContracts.ILanguageVariantModelWithComponentsContract
            }
        ) {
            Object.assign(this, data);
        }
    }
}
