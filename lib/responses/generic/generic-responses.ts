import { BaseResponses } from '../base-responses';

export namespace GenericResponses {
    export class GenericResponse extends BaseResponses.BaseContentManagementResponse<
        any,
        any
    > {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, response: any) {
            super(debug, response, response);
        }
    }
}
