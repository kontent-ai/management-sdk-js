import { ProjectModels, ProjectResponses, SharedModels } from '../../../lib';
import * as validateProjectContentJson from '../fake-responses/projects/fake-project-validation-issues.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('List project issues', () => {
    let response: ProjectResponses.ProjectValidationIssuesListResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(validateProjectContentJson)
            .listProjectValidationIssues()
            .byTaskId('x')
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient.listProjectValidationIssues().byTaskId('x').getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/validate-async/tasks/x/issues`);
    });

    it(`response should be instance of ProjectValidationIssuesListResponse class`, () => {
        expect(response).toEqual(jasmine.any(ProjectResponses.ProjectValidationIssuesListResponse));
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
                const mappedModel = item as ProjectModels.ProjectValidationTypeIssueModel;
                expect(mappedModel).toEqual(jasmine.any(ProjectModels.ProjectValidationTypeIssueModel));
                expect(mappedModel.type).toEqual(jasmine.any(ProjectModels.ProjectTypeModel));

                mappedModel.issues.forEach((issue) => {
                    expect(issue).toEqual(jasmine.any(ProjectModels.ProjectIssueModel));
                    expect(issue.element).toEqual(jasmine.any(ProjectModels.ProjectVariantElementModel));
                });
            } else if (item.issue_type === 'variant_issue') {
                const mappedModel = item as ProjectModels.ProjectValidationVariantIssueModel;
                expect(mappedModel).toEqual(jasmine.any(ProjectModels.ProjectValidationVariantIssueModel));
                expect(mappedModel.language).toEqual(jasmine.any(ProjectModels.ProjectVariantLanguageModel));

                mappedModel.issues.forEach((issue) => {
                    expect(issue).toEqual(jasmine.any(ProjectModels.ProjectIssueModel));
                    expect(issue.element).toEqual(jasmine.any(ProjectModels.ProjectVariantElementModel));
                });
            }
        });
    });
});
