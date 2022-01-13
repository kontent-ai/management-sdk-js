import { ProjectUserModels, ProjectUsersResponses } from '../../../lib';
import * as responseJson from '../fake-responses/project-users/fake-invite-user.spec.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Change user roles', () => {
    let response: ProjectUsersResponses.ChangeUserRolesResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .changeUserRoles()
            .byEmail('x@email.com')
            .withData({
                collection_groups: [
                    {
                        collections: [
                            {
                                id: 'colId'
                            }
                        ],
                        roles: [
                            {
                                id: 'roleId',
                                languages: [
                                    {
                                        id: 'langId'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const urlByEmail = cmLiveClient
            .changeUserRoles()
            .byEmail('xEmail')
            .withData({
                collection_groups: []
            })
            .getUrl();

        const urlById = cmLiveClient
            .changeUserRoles()
            .byId('xId')
            .withData({
                collection_groups: []
            })
            .getUrl();

        expect(urlByEmail).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/users/email/xEmail/roles`);
        expect(urlById).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/users/xId/roles`);
    });

    it(`response should be instance of ChangeUserRolesResponse class`, () => {
        expect(response).toEqual(jasmine.any(ProjectUsersResponses.ChangeUserRolesResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`collection properties should be mapped`, () => {
        expect(response.data.userId).toEqual(responseJson.user_id);
        response.data.collectionGroups.forEach((m) => {
            expect(m).toEqual(jasmine.any(ProjectUserModels.CollectionGroup));
        });
    });
});
