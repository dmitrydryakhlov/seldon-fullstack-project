import {LOAD_HISTORY, SEND_DATA} from "../Actions/ActionTypes";
import {IFSAAction, IHistory, IHistoryState, IResponse, THandler} from "../Models";

const initialState: IHistoryState = {
    history: [],
    currentResponse: {count: 0, square: 0}
}

const handlers: THandler<IHistoryState, IHistory[] | IResponse> = {
    [LOAD_HISTORY]: (state: IHistoryState, action?: IFSAAction<IHistory[] | IResponse>): IHistoryState => ({
        ...state, history: action?.payload as IHistory[] || initialState.history
    }),
    [SEND_DATA]: (state: IHistoryState, action?: IFSAAction<IHistory[] | IResponse>): IHistoryState => ({
        ...state, currentResponse: action?.payload as IResponse || initialState.currentResponse
    }),
    DEFAULT: (state: IHistoryState): IHistoryState => state,
}

export const HistoryReducer = (state: IHistoryState = initialState, action: IFSAAction<IHistory[] | IResponse>): IHistoryState => {
    const handle = handlers[action.type] || handlers["DEFAULT"];
    return handle(state, action)
}