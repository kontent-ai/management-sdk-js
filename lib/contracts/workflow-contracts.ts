export namespace WorkflowContracts {

    export interface IWorkflowStepContract {
        id: string;
        name: string;
        codename: string;
        transitions_to: string[];
    }

    export type IListWorkflowStepsResponseContract = IWorkflowStepContract[];

}
