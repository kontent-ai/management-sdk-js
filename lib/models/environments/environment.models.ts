import { EnvironmentContracts } from '../../contracts';

export namespace EnvironmentModels {
    export class EnvironmentReportModel {
        constructor(public id: string, public name: string) {}
    }

    export class EnvironmentValidationVariantIssueModel {
        public readonly issue_type: EnvironmentContracts.EnvironmentValidationIssueType = 'variant_issue';

        constructor(
            public item: EnvironmentVariantContentItemModel,
            public language: EnvironmentVariantLanguageModel,
            public issues: EnvironmentIssueModel[]
        ) {}
    }

    export class EnvironmentValidationTypeIssueModel {
        public readonly issue_type: EnvironmentContracts.EnvironmentValidationIssueType = 'type_issue';

        constructor(public type: EnvironmentTypeModel, public issues: EnvironmentIssueModel[]) {}
    }

    export class EnvironmentInformationModel {
        constructor(public id: string, public name: string, public environment: string) {}
    }

    export class EnvironmentVariantContentItemModel {
        constructor(public id: string, public name: string, public codename: string) {}
    }

    export class EnvironmentVariantLanguageModel {
        constructor(public id: string, public name: string, public codename: string) {}
    }

    export class EnvironmentVariantElementModel {
        constructor(public id: string, public name: string, public codename: string) {}
    }

    export class EnvironmentTypeIssueModel {
        constructor(public type: EnvironmentTypeModel, public issues: EnvironmentIssueModel[]) {}
    }

    export class EnvironmentTypeModel {
        constructor(public id: string, public name: string, public codename: string) {}
    }

    export class EnvironmentIssueModel {
        constructor(public element: EnvironmentVariantElementModel, public messages: string[]) {}
    }

    export class EnvironmentVariantIssueModel {
        constructor(
            public item: EnvironmentVariantContentItemModel,
            public language: EnvironmentVariantLanguageModel,
            public issues: EnvironmentIssueModel[]
        ) {}
    }

    export class EnvironmentCloningStateModel {
        constructor(public cloningState: string) {}
    }

    export interface IModifyEnvironmentData {
        op: 'rename_environment';
        value: string;
    }

    export class EnvironmentModel {
        constructor(public id: string, public name: string, public isProduction: boolean) {}
    }

    export interface ICloneEnvironmentData {
        name: string;
        roles_to_activate?: string[];
    }

    export class CloneEnvironmentModel {
        constructor(
            public id: string,
            public managementApiKey: string,
            public deliveryPreviewApiKey: string,
            public securedDeliveryApiKey: string
        ) {}
    }

    export interface IMarkEnvironmentAsProductionData {
        enable_webhooks: boolean;
    }
}
