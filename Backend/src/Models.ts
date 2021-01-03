export interface IRequest {
    word: string;
    number: string;
}

export interface IResponse {
    count: number;
    square: string;
}

export interface IDeleteRequest {
    id: string;
}

export interface IHistory {
    responseTime: number;
    request: IRequest;
    response: IResponse;
    action: string;
    requestId: string;
}