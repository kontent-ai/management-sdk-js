import { SharedModels } from '../shared/shared-models';
import { TaxonomyContracts } from '../../contracts';

export namespace TaxonomyModels {
    export type ModifyTaxonomyTypeOperation = 'addInto' | 'remove' | 'replace' | 'move';

    export interface IModifyTaxonomyData {
        op: ModifyTaxonomyTypeOperation;
        reference?: SharedModels.IReferenceObject;
        property_name?: string;
        value?: IAddTaxonomyRequestModel | string | IAddTaxonomyRequestModel[];

        before?: SharedModels.IReferenceObject;
        after?: SharedModels.IReferenceObject;
        under?: SharedModels.IReferenceObject;
    }

    export class Taxonomy implements SharedModels.IBaseModel<TaxonomyContracts.ITaxonomyContract> {
        public lastModified!: Date;
        public name!: string;
        public id!: string;
        public codename!: string;
        public terms!: Taxonomy[];
        public externalId?: string;
        public _raw!: TaxonomyContracts.ITaxonomyContract;

        constructor(data: {
            lastModified: Date;
            name: string;
            id: string;
            codename: string;
            terms: Taxonomy[];
            externalId?: string;
            _raw: TaxonomyContracts.ITaxonomyContract;
        }) {
            Object.assign(this, data);
        }
    }

    export interface IAddTaxonomyRequestModel {
        name: string;
        terms?: IAddTaxonomyRequestModel[];
        external_id?: string;
        codename?: string;
    }
}
