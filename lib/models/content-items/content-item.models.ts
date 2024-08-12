import { ContentItemContracts } from '../../contracts';
import { SharedModels } from '../shared/shared-models';

export namespace ContentItemModels {
    export class ContentItem implements SharedModels.IBaseModel<ContentItemContracts.IContentItemModelContract> {
        public id!: string;
        public name!: string;
        public codename!: string;
        public type!: {
            id: string;
        };
        public externalId?: string;
        public lastModified!: Date;
        public collection!: SharedModels.ReferenceObject;
        public spaces: SharedModels.IIdRefenceObject[] = [];
        public _raw!: ContentItemContracts.IContentItemModelContract;

        constructor(data: {
            id: string;
            name: string;
            codename: string;
            type: {
                id?: string;
                codename?: string;
                external_id?: string;
            };
            externalId?: string;
            lastModified: Date;
            collection: SharedModels.ReferenceObject;
            spaces: SharedModels.IIdRefenceObject[];
            _raw: ContentItemContracts.IContentItemModelContract;
        }) {
            Object.assign(this, data);
        }
    }
}
