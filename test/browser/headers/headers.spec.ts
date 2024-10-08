import { createManagementClient } from '../../../lib';

describe('Headers', () => {
    it(`Custom header should be set from global config`, () => {
        const headerName: string = 'x-header';
        const headerValue: string = 'x-value';

        const client = createManagementClient({
            apiKey: '',
            headers: [
                {
                    header: headerName,
                    value: headerValue
                }
            ]
        });

        const queryHeaders = client.environmentInformation().getHeaders();

        expect(queryHeaders.length).toEqual(1);

        const queryHeader = queryHeaders.find((m) => m.header === headerName);

        expect(queryHeader?.header).toEqual(headerName);
        expect(queryHeader?.value).toEqual(headerValue);
    });

    it(`Custom header should be set by query`, () => {
        const headerName: string = 'x-header';
        const headerValue: string = 'x-value';

        const client = createManagementClient({
            apiKey: '',
            headers: []
        });

        const queryHeaders = client
            .environmentInformation()
            .withHeader({
                header: headerName,
                value: headerValue
            })
            .getHeaders();

        expect(queryHeaders.length).toEqual(1);

        const queryHeader = queryHeaders.find((m) => m.header === headerName);

        expect(queryHeader?.header).toEqual(headerName);
        expect(queryHeader?.value).toEqual(headerValue);
    });
});
