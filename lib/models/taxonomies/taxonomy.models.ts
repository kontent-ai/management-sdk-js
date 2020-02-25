import { SharedModels } from '../shared/shared-models';
import { TaxonomyContracts } from '../../contracts';

export namespace TaxonomyModels {

    export class Taxonomy implements SharedModels.IBaseModel<TaxonomyContracts.ITaxonomyContract> {

        public lastModified!: Date;
        public name!: string;
        public id!: string;
        public codename!: string;
        public terms!: Taxonomy[];
        public _raw!: TaxonomyContracts.ITaxonomyContract;

        constructor(data: {
            lastModified: Date;
            name: string;
            id: string;
            codename: string;
            terms: Taxonomy[];
            _raw: TaxonomyContracts.ITaxonomyContract
        }) {
            Object.assign(this, data);
        }
    }

    export interface IAddTaxonomyRequestModel {
        name: string;
        terms: IAddTaxonomyRequestModel[];
        external_id?: string;
        codename?: string;
    }
}
