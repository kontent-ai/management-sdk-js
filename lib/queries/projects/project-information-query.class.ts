import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../../config';
import { ProjectResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ProjectInformationQuery extends BaseQuery<ProjectResponses.ProjectInformationResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ContentManagementQueryService,
  ) {
    super(config, queryService);

    this._addSlashToUrl = false;
  }

  toObservable(): Observable<ProjectResponses.ProjectInformationResponse> {
    return this.queryService.projectInformation(this.getUrl(), this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.projectInformation();
  }
}

