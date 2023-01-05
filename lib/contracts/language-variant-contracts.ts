import { ElementContracts } from './element-contracts';
import { SharedContracts } from './shared-contracts';
import { LanguageVariantElements } from '../models';

export namespace LanguageVariantContracts {

    export interface ILanguageVariantModelContract {
        item: SharedContracts.IReferenceObjectContract;
        elements: ElementContracts.IContentItemElementContract[];
        language: SharedContracts.IReferenceObjectContract;
        last_modified: string;
        workflow_step: SharedContracts.IReferenceObjectContract;
    }

    export interface ILanguageVariantModelWithComponentsContract {
        item: SharedContracts.IReferenceObjectContract;
        elements: ElementContracts.IContentItemElementWithComponentsContract[];
        language: SharedContracts.IReferenceObjectContract;
        last_modified: string;
        workflow_step: SharedContracts.IReferenceObjectContract;
    }

    export interface IListLanguageVariantsOfItemResponseContract extends ILanguageVariantModelContract {
    }

    export interface IUpsertLanguageVariantPostContract {
        elements: LanguageVariantElements.ILanguageVariantElementBase[];
        workflow?: IUpsertLanguageVariantWorkflowContract;
    }
    export interface IListLanguageVariantsOfContentTypeWithComponentsResponseContract {
        variants: ILanguageVariantModelWithComponentsContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }

    export interface IListLanguageVariantsByCollectionResponseContract {
        variants: ILanguageVariantModelContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }

    export interface IListLanguageVariantsOfContentTypeResponseContract {
        variants: ILanguageVariantModelContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }

    export interface IUpsertLanguageVariantWorkflowContract {
        workflow_identifier: SharedContracts.ICodenameReferenceContract;
        step_identifier: SharedContracts.ICodenameReferenceContract;
    }


    export interface IUpsertLanguageVariantResponseContract extends ILanguageVariantModelContract {
    }

    export interface IViewLanguageVariantResponseContract extends ILanguageVariantModelContract {
    }
}
