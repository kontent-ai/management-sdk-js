import { ContentItemContracts } from '../../contracts';
import { SharedModels } from '../shared/shared-models';

export namespace ContentItemModels {

    export class ContentItem implements SharedModels.IBaseModel<ContentItemContracts.IContentItemModelContract> {

        public id!: string;
        public name!: string;
        public codename!: string;
        public type!: {
            id: string
        };
        public externalId?: string;
        public lastModified!: Date;
        public _raw!: ContentItemContracts.IContentItemModelContract;


        constructor(
            data: {
                id: string,
                name: string,
                codename: string,
                type: {
                    id?: string,
                    codename?: string;
                    external_id?: string;
                },
                externalId?: string,
                lastModified: Date,
                _raw: ContentItemContracts.IContentItemModelContract
            }
        ) {
            Object.assign(this, data);
        }
    }
}

