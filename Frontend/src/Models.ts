import {EAlertStatus} from "./Enums";

export type THandler<IState, IAction = any> = {
    [key: string]: (state: IState, action?: IFSAAction<IAction>) => IState
}

export interface IAlert {
    type: EAlertStatus;
    text: string;
}

export interface IAlertState {
    alert?: IAlert;
    visible: boolean;
}

export interface IAlertContext {
    alert?: IAlert;
    visible: boolean;
    hideAlert: () => void;
    showAlert: (alert: IAlert) => void;
}

export interface ILoadingState {
    loading: boolean;
    sending: boolean;
}

export interface IHistoryState {
    history: IHistory[];
    currentResponse: IResponse;
}

export interface IAction {
    type: string;
}

export interface IFSAAction<P> extends IAction {
    payload: P;
}

export interface IAppState {
    AlertState: IAlertState;
    LoadingState: ILoadingState;
    HistoryState: IHistoryState;
}

export interface IRequest {
    word: string | number;
    number: string | number;
}

export interface IResponse {
    count: number;
    square: number;
}

export interface IHistory {
    responseTime: string;
    request: IRequest;
    response: IResponse;
    action: string;
    requestId: string;
}