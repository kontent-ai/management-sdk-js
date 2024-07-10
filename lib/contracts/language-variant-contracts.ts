import { ElementContracts } from './element-contracts';
import { SharedContracts } from './shared-contracts';
import { LanguageVariantElements } from '../models';

export namespace LanguageVariantContracts {
    export interface ILanguageVariantModelContract {
        item: SharedContracts.IReferenceObjectContract;
        elements: ElementContracts.IContentItemElementContract[];
        language: SharedContracts.IReferenceObjectContract;
        last_modified: string;
        workflow: ILanguageVariantWorkflowContract;
        workflow_step: SharedContracts.IReferenceObjectContract;
    }

    export interface ILanguageVariantModelsContract {
        item: SharedContracts.IReferenceObjectContract;
        elements: ElementContracts.IContentItemElementContract[];
        language: SharedContracts.IReferenceObjectContract;
        last_modified: string;
        workflow: ILanguageVariantWorkflowContract;
    }

    export interface IListLanguageVariantsOfItemResponseContract extends ILanguageVariantModelContract {}

    export interface IUpsertLanguageVariantPostContract {
        elements: LanguageVariantElements.ILanguageVariantElementBase[];
        workflow?: ILanguageVariantWorkflowContract;
    }
    export interface IListLanguageVariantsOfContentTypeWithComponentsResponseContract {
        variants: ILanguageVariantModelsContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }

    export interface IListLanguageVariantsByCollectionResponseContract {
        variants: ILanguageVariantModelContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }

    export interface IListLanguageVariantsBySpaceResponseContract {
        variants: ILanguageVariantModelContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }

    export interface IListLanguageVariantsOfContentTypeResponseContract {
        variants: ILanguageVariantModelContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }

    export interface ILanguageVariantWorkflowContract {
        workflow_identifier: SharedContracts.ICodenameIdReferenceContract;
        step_identifier: SharedContracts.ICodenameIdReferenceContract;
    }

    export interface IUpsertLanguageVariantResponseContract extends ILanguageVariantModelContract {}

    export interface IViewLanguageVariantResponseContract extends ILanguageVariantModelContract {}
}
