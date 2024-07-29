import { SharedModels } from '../shared/shared-models';
import { SharedContracts, WebSpotlightContracts } from '../../contracts';

export namespace WebSpotlightModels {
    export class WebSpotlightStatus implements SharedModels.IBaseModel<WebSpotlightContracts.IWebSpotlightStatus> {
        public enabled: boolean;
        public rootType?: SharedModels.IIdRefenceObject;
        public _raw: WebSpotlightContracts.IWebSpotlightStatus;

        constructor(data: {
            enabled: boolean;
            rootType?: SharedModels.IIdRefenceObject;
            _raw: WebSpotlightContracts.IWebSpotlightStatus;
        }) {
            this.enabled = data.enabled;
            this.rootType = data.rootType;
            this._raw = data._raw;
        }
    }

    export interface IActivateWebSpotlightData {
        root_type: SharedContracts.IReferenceObjectContract | null;
    }
}
