import { SubscriptionContracts } from '../../contracts';
import { SharedModels, SubscriptionModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace SubscriptionResponses {
    export class SubscriptionProjectsListResponse extends BaseResponses.BaseContentManagementListResponse<
        SubscriptionContracts.IListSubscriptionProjectsResponseContract,
        SubscriptionModels.SubscriptionProject
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: SubscriptionContracts.IListSubscriptionProjectsResponseContract,
            data: {
                items: SubscriptionModels.SubscriptionProject[];
                pagination: SharedModels.Pagination;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class SubscriptionProjectsListAllResponse extends BaseResponses.ContentManagementListAllResponse<
        SubscriptionProjectsListResponse,
        SubscriptionModels.SubscriptionProject
    > {
        constructor(data: {
            items: SubscriptionModels.SubscriptionProject[];
            responses: SubscriptionProjectsListResponse[];
        }) {
            super(data);
        }
    }

    export class ViewSubscriptionProjectResponse extends BaseResponses.BaseContentManagementResponse<
        SubscriptionContracts.ISubscriptionProjectContract,
        SubscriptionModels.SubscriptionProject
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: SubscriptionContracts.ISubscriptionProjectContract,
            data: SubscriptionModels.SubscriptionProject
        ) {
            super(debug, rawData, data);
        }
    }

    export class SubscriptionUsersListResponse extends BaseResponses.BaseContentManagementListResponse<
        SubscriptionContracts.IListSubscriptionUsersResponseContract,
        SubscriptionModels.SubscriptionUser
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: SubscriptionContracts.IListSubscriptionUsersResponseContract,
            data: {
                items: SubscriptionModels.SubscriptionUser[];
                pagination: SharedModels.Pagination;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class SubscriptionUsersListAllResponse extends BaseResponses.ContentManagementListAllResponse<
        SubscriptionUsersListResponse,
        SubscriptionModels.SubscriptionUser
    > {
        constructor(data: {
            items: SubscriptionModels.SubscriptionUser[];
            responses: SubscriptionUsersListResponse[];
        }) {
            super(data);
        }
    }

    export class ViewSubscriptionUserResponse extends BaseResponses.BaseContentManagementResponse<
        SubscriptionContracts.ISubscriptionUserContract,
        SubscriptionModels.SubscriptionUser
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: SubscriptionContracts.ISubscriptionUserContract,
            data: SubscriptionModels.SubscriptionUser
        ) {
            super(debug, rawData, data);
        }
    }
}
