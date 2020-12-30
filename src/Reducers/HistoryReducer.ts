import {LOAD_HISTORY} from "../Actions/ActionTypes";
import {IFSAAction, IHistory, IHistoryState} from "../Models";

const initialState: IHistoryState = {
    history: []
}

type THandler = {
    [key: string]: (state: IHistoryState, action: IFSAAction<IHistory[]>) => IHistoryState
}


const handlers: THandler = {
    [LOAD_HISTORY]: (state: IHistoryState, action: IFSAAction<IHistory[]>): IHistoryState => ({
        ...state, history: action.payload || []
    }),
    DEFAULT: (state: IHistoryState): IHistoryState => state,
}

export const HistoryReducer = (state: IHistoryState = initialState, action: IFSAAction<IHistory[]>): IHistoryState => {
    const handle = handlers[action.type] || handlers["DEFAULT"];
    return handle(state, action)
}