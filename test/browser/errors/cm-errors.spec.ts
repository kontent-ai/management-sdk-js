import { SharedModels } from '../../../lib';
import * as fakeErrorJson from '../fake-responses/errors/cm-error-with-validation-errors.json';
import { getTestClientWithBaseKontentError } from '../setup';

describe('Content management error with validation errors', () => {
    let succeeded: boolean;
    let error: any | SharedModels.ContentManagementBaseKontentError;

    beforeAll(async () => {
        try {
            await getTestClientWithBaseKontentError(fakeErrorJson).listContentItems().toPromise();

            succeeded = true;
        } catch (err) {
            error = err;
            succeeded = false;
        }
    });

    it(`Response shouldn't succeed because the item does not exists`, () => {
        expect(succeeded).toEqual(false);
    });

    it(`Error model should have all properties assigned`, () => {
        const contentManagementError = error as SharedModels.ContentManagementBaseKontentError;
        expect(error).toEqual(jasmine.any(SharedModels.ContentManagementBaseKontentError));
        expect(contentManagementError.errorCode).toEqual(fakeErrorJson.error_code);
        expect(contentManagementError.errorCode).toEqual(fakeErrorJson.error_code);
        expect(contentManagementError.message).toEqual(fakeErrorJson.message);
        expect(contentManagementError.requestId).toEqual(fakeErrorJson.request_id);

        expect(contentManagementError.validationErrors.length).toEqual(fakeErrorJson.validation_errors.length);

        for (const originalErrorMessage of fakeErrorJson.validation_errors) {
            const mappedValidationError = contentManagementError.validationErrors.find(
                (m) => m.message === originalErrorMessage.message
            );
            expect(mappedValidationError).toBeDefined();
            expect(mappedValidationError).toEqual(jasmine.any(SharedModels.ValidationError));
        }
    });
});
