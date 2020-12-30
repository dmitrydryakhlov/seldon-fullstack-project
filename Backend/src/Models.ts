export interface IRequest {
    word: string;
    number: string;
}

export interface IResponse {
    count: number;
    square: number;
}

export interface IDeleteRequest {
    requestId: string;
}

export interface IHistory {
    responseTime?: number;
    request: IRequest;
    response: IResponse;
    action: string;
    requestId: string;
}