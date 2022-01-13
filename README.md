# Kontent Management Javascript SDK

> Javascript SDK for the
> [Kontent Management](https://developer.kenticocloud.com/v1/reference#content-management-api-v2). Helps you manage
> content in your [Kentico Kontent](https://kontent.ai/) projects. Supports both `node.js` and `browsers`.

[![npm version](https://badge.fury.io/js/%40kentico%2Fkontent-management.svg)](https://badge.fury.io/js/%40kentico%2Fkontent-management)
[![Build & Test](https://github.com/Kentico/kontent-management-sdk-js/actions/workflows/integrate.yml/badge.svg)](https://github.com/Kentico/kontent-management-sdk-js/actions/workflows/integrate.yml)
[![CircleCI](https://circleci.com/gh/Kentico/kontent-management-sdk-js/tree/master.svg?style=svg)](https://circleci.com/gh/Kentico/kontent-management-sdk-js/tree/master)
[![npm](https://img.shields.io/npm/dt/@kentico/kontent-management.svg)](https://www.npmjs.com/package/@kentico/kontent-management)
[![Known Vulnerabilities](https://snyk.io/test/github/Kentico/kontent-management-sdk-js/badge.svg)](https://snyk.io/test/github/kentico/kontent-management-sdk-js)
[![GitHub license](https://img.shields.io/github/license/Kentico/kontent-management-sdk-js.svg)](https://github.com/Kentico/kontent-management-sdk-js)
![Gzip bundle](https://img.badgesize.io/https://cdn.jsdelivr.net/npm/@kentico/kontent-management/_bundles/kontent-management.umd.min.js?compression=gzip)
[![](https://data.jsdelivr.com/v1/package/npm/@kentico/kontent-management/badge)](https://www.jsdelivr.com/package/npm/@kentico/kontent-management)

## Getting started

To get started, you'll first need to have access to your [Kentico Kontent](https://kontent.ai/) project where you need
to enable Content management API and generate `access token` that will be used to authenticate all requests made by this
library.

## Installation

```
npm i @kentico/kontent-management --save
```

### Using a standalone version in browsers

If you'd like to use this library directly in browser, place following script tags to your html page. You may of course
download it and refer to local versions of scripts.

```javascript
<script src="https://cdn.jsdelivr.net/npm/@kentico/kontent-management/_bundles/kontent-management.umd.min.js"></script>
```

### Making the first request

The following code example shows how to create new content item in your Kentico Kontent project.

```javascript
import { ManagementClient } from '@kentico/kontent-management';

const client = new ManagementClient({
    projectId: 'xxx', // id of your Kentico Kontent project
    apiKey: 'yyy' // Content management API token
});

client
    .addContentItem()
    .withData({
        name: 'New article',
        type: {
            codename: 'article' // codename of content type
        }
    })
    .toPromise()
    .then(response => {
        console.log(response);
    });
```

If you are using `UMD` bundles directly in browsers, you can find this library under `KontentManagement` global
variable.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Kontent management | jsdelivr cdn</title>
        <script src="https://cdn.jsdelivr.net/npm/@kentico/kontent-management/dist/bundles/kontent-management.umd.min.js"></script>
    </head>
    <body>
        <script type="text/javascript">
            var KontentManagement = window['kontentManagement'];

            var client = new KontentManagement.ManagementClient({
                projectId: 'xxx',
                // using CM API key in browser is NOT safe. If you need to use SDK in browsers
                // you should use proxy server and set authorization header there rather than here
                apiKey: 'yyy'
            });

            client
                .addContentItem()
                .withData({
                    name: 'New article',
                    type: {
                        codename: 'article'
                    }
                })
                .toPromise()
                .then(response => {
                    console.log(response);
                });
        </script>
    </body>
</html>
```

### Configuration

The `ManagementClient` contains several configuration options:

```javascript
const client = new ManagementClient({
    // configuration options
});
```

| Option          | Default                               | Description                                                                                                                                                         |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `projectId`     | N/A                                   | **Required for Management API** - Id of your Kentico Kontent project                                                                                                                   |
| `Management API Key`        | N/A                                   | **Required for Management API** - Management API Key            |
| `subscriptionId`       | N/A  | **Required for Subscription API** - If of your Subscription     |
| `subscription API Key`       | N/A  | **Required for Subscription API** - Subscription API Key
| `baseUrl`       | https://manage.kontent.ai/v2/projects | Base URL of REST api. Can be useful if you are using custom proxy or for testing purposes                                                                          
| `retryStrategy` | undefined                             | Retry strategy configuration. If not set, default strategy is used.                                                                                                 |
| `httpService`   | HttpService                           | Used to inject implementation of `IHttpService` used to make HTTP request across network. Can also be useful for testing purposes by returning specified responses. |

### Handling API Management Errors

See the [error section in Management API reference](https://docs.kontent.ai/reference/management-api-v2#section/Errors) for infofmation about status codes and error messages.

```typescript
try {
    const client = await new ManagementClient({
        projectId: 'x',
        apiKey: 'y'
    });
    await client.viewContentItem().byItemCodename('invalid codename').toPromise();
} catch (err) {
    if (err instanceof SharedModels.ContentManagementBaseKontentError) {
        // Error message provided by API response and mapped by SDK
        const message = err.message;
        // In case you need more specific information about the request error.
        // Structure of the error depends on HttpService.
        const error = error.originalError;
    } else {
        // handle generic error however you need
    }
}
```

### Cancelling Requests

```typescript
const client = await new ManagementClient({
    projectId: 'x',
    apiKey: 'y'
});

// prepare cancel token
const cancelTokenRequest = client.createCancelToken();

client
    .listContentItems()
    .withCancelToken(cancelTokenRequest)
    .toPromise()
    .then((x) => {
        // will not be executed as request was cancelled before network
        // request got a chance to finish
    })
    .catch((err) => {
        // error with your custom message 'Request manually cancelled'
    });

// cancel request right away
cancelTokenRequest.cancel('Request manually cancelled');
```

### Sample scenario

Following is a sample scenario consisting of:

1. Inicializing client
2. Getting default language of project
3. Creating new taxonomy with terms
4. Creating new content type
5. Creating content item
6. Creating binary file & asset from URL
7. Upserting language variant of the newly created content item in default language

#### Inicializing client

```typescript 
const client = new ManagementClient({
    projectId: 'x',
    apiKey: 'y'
});
```

#### Getting default language of project

```typescript 
const languages = await client.listLanguages().toPromise();
const defaultLanguage = languages.data.items.find((m) => m.isDefault);
```

####  Creating new taxonomy with terms

```typescript 
const movieTaxonomy = await client
    .addTaxonomy()
    .withData({
        name: 'Genre',
        codename: 'genre',
        terms: [
            {
                name: 'Comedy',
                codename: 'comedy',
                terms: []
            },
            {
                name: 'Action',
                codename: 'action',
                terms: []
            },
            {
                name: 'Anime',
                codename: 'anime',
                terms: []
            }
        ]
    })
    .toPromise();
```

#### Creating new content type

```typescript 
const movieType = await client
    .addContentType()
    .withData((builder) => {
        return {
            name: 'Movie',
            codename: 'movie',
            elements: [
                builder.textElement({
                    name: 'Title',
                    codename: 'title',
                    type: 'text',
                    is_required: true,
                    maximum_text_length: {
                        applies_to: 'characters',
                        value: 50
                    }
                }),
                builder.dateTimeElement({
                    name: 'ReleaseDate',
                    codename: 'release_date',
                    type: 'date_time',
                    is_required: true
                }),
                builder.richTextElement({
                    name: 'Description',
                    codename: 'description',
                    type: 'rich_text',
                    is_required: true,
                    allowed_table_formatting: ['unstyled', 'bold', 'italic'],
                    allowed_blocks: ['text', 'tables'],
                    maximum_text_length: {
                        applies_to: 'words',
                        value: 500
                    }
                }),
                builder.assetElement({
                    name: 'Cover',
                    codename: 'cover',
                    type: 'asset',
                    allowed_file_types: 'adjustable',
                    asset_count_limit: {
                        condition: 'exactly',
                        value: 1
                    },
                    is_required: true
                }),
                builder.taxonomyElement({
                    type: 'taxonomy',
                    codename: 'genre',
                    is_required: true,
                    taxonomy_group: {
                        id: movieTaxonomy.data.id
                    }
                })
            ]
        };
    })
    .toPromise();
```

#### Creating content item

```typescript 
const contentItem = await client
    .addContentItem()
    .withData({
        name: 'Warrior',
        type: {
            codename: 'movie'
        }
    })
    .toPromise();
```

####  Creating binary file & asset from URL

```typescript 
const imageAsset = await client
    .uploadAssetFromUrl()
    .withData({
        asset: {
            descriptions: [{ description: 'Image poster for warrior', language: { id: defaultLanguage?.id ?? '' } }],
            title: 'Warrior cover'
        },
        binaryFile: {
            filename: 'warrior.jpg'
        },
        fileUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e3/Warrior_Poster.jpg'
    })
    .toPromise();
```

#### Upserting language variant of the newly created content item in default language
```typescript 
const languageVariant = await client
    .upsertLanguageVariant()
    .byItemId(contentItem.data.id)
    .byLanguageId(defaultLanguage?.id ?? '')
    .withData((builder) => [
        builder.textElement({
            element: {
                codename: 'title'
            },
            value: 'Warrior'
        }),
        builder.dateTimeElement({
            element: {
                codename: 'release_date'
            },
            value: '2011-09-09'
        }),
        builder.richTextElement({
            element: {
                codename: 'description'
            },
            value: '<p>Path that puts the fighter on a collision course with his estranged, older brother.</p>'
        }),
        builder.assetElement({
            element: {
                codename: 'cover'
            },
            value: [
                {
                    id: imageAsset.data.id
                }
            ]
        }),
        builder.taxonomyElement({
            element: {
                codename: 'genre'
            },
            value: [
                {
                    codename: 'action'
                }
            ]
        })
    ])
    .toPromise();
});
```

### Testing

> If you want to mock http responses, it is possible to use
> [external implementation of configurable Http Service](../core/README.md#testing) as a part of the
> [client configuration](#configuration).

### Troubleshooting & feedback

If you have any issues or want to share your feedback, please feel free to
[create an issue](https://github.com/Kentico/kontent-management-sdk-js/issues/new/choose) in this GitHub repository.

### Contributions

Contributions are welcomed. If you have an idea of what you would like to implement, let us know and lets discuss
details of your PR.
