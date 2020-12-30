import {EAlertStatus} from "./Enums";

export interface INote {
    id: number;
    title: string;
}

export interface IAlert {
    type: EAlertStatus;
    text: string;
}

export interface IAlertState {
    alert?: IAlert;
    visible: boolean;
}

export interface ILoadingState {
    loading: boolean;
}

export interface IHistoryState {
    history: IHistory[];
}

export interface IFSAAction<P> {
    type: string;
    payload?: P;
}

export interface IAppState {
    AlertState: IAlertState;
    LoadingState: ILoadingState;
    HistoryState: IHistoryState;
}

export interface IRequest {
    word: string;
    number: number;
}

export interface IResponse {
    count: number;
    square: number;
}

export interface IHistory {
    responseTime: number;
    request: IRequest;
    response: IResponse;
    action: string;
    requestId: string;
}