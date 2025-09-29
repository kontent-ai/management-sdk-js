import { ContentItemContracts } from '../../contracts';
import { SharedModels } from '../shared/shared-models';

export namespace ContentItemModels {
    export class ContentItem implements SharedModels.IBaseModel<ContentItemContracts.IContentItemModelContract> {
        public id!: string;
        public name!: string;
        public codename!: string;
        public type!: SharedModels.IIdRefenceObject;
        public externalId?: string;
        public lastModified!: Date;
        public collection!: SharedModels.IIdRefenceObject;
        public spaces: SharedModels.IIdRefenceObject[] = [];
        public sitemapLocations: SharedModels.IIdRefenceObject[] = [];
        public _raw!: ContentItemContracts.IContentItemModelContract;

        constructor(data: {
            id: string;
            name: string;
            codename: string;
            type: SharedModels.IIdRefenceObject;
            externalId?: string;
            lastModified: Date;
            collection: SharedModels.IIdRefenceObject;
            spaces: SharedModels.IIdRefenceObject[];
            sitemapLocations: SharedModels.IIdRefenceObject[];
            _raw: ContentItemContracts.IContentItemModelContract;
        }) {
            Object.assign(this, data);
        }
    }
}
