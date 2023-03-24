import { EnvironmentModels, EnvironmentResponses, SharedModels } from '../../../lib';
import * as validateProjectContentJson from '../fake-responses/projects/fake-project-validation-issues.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('List project issues', () => {
    let response: EnvironmentResponses.EnvironmentValidationIssuesListResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(validateProjectContentJson)
            .listEnvironmentValidationIssues()
            .byTaskId('x')
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient.listEnvironmentValidationIssues().byTaskId('x').getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/validate-async/tasks/x/issues`);
    });

    it(`response should be instance of ProjectValidationIssuesListResponse class`, () => {
        expect(response).toEqual(jasmine.any(EnvironmentResponses.EnvironmentValidationIssuesListResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`pagination should be mapped`, () => {
        expect(response.data.pagination).toBeDefined();
        expect(response.data.pagination).toEqual(jasmine.any(SharedModels.Pagination));
    });

    it(`variant issue data should be mapped`, () => {
        response.data.items.forEach((item) => {
            if (item.issue_type === 'type_issue') {
                const mappedModel = item as EnvironmentModels.EnvironmentValidationTypeIssueModel;
                expect(mappedModel).toEqual(jasmine.any(EnvironmentModels.EnvironmentValidationTypeIssueModel));
                expect(mappedModel.type).toEqual(jasmine.any(EnvironmentModels.EnvironmentTypeModel));

                mappedModel.issues.forEach((issue) => {
                    expect(issue).toEqual(jasmine.any(EnvironmentModels.EnvironmentIssueModel));
                    expect(issue.element).toEqual(jasmine.any(EnvironmentModels.EnvironmentVariantElementModel));
                });
            } else if (item.issue_type === 'variant_issue') {
                const mappedModel = item as EnvironmentModels.EnvironmentValidationVariantIssueModel;
                expect(mappedModel).toEqual(jasmine.any(EnvironmentModels.EnvironmentValidationVariantIssueModel));
                expect(mappedModel.language).toEqual(jasmine.any(EnvironmentModels.EnvironmentVariantLanguageModel));

                mappedModel.issues.forEach((issue) => {
                    expect(issue).toEqual(jasmine.any(EnvironmentModels.EnvironmentIssueModel));
                    expect(issue.element).toEqual(jasmine.any(EnvironmentModels.EnvironmentVariantElementModel));
                });
            }
        });
    });
});
