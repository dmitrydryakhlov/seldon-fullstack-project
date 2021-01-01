import {HIDE_LOADING, HIDE_SENDING, SHOW_LOADING, SHOW_SENDING} from "../Actions/ActionTypes";
import {IAction, ILoadingState, THandler} from "../Models";

const initialState: ILoadingState = {
    loading: false,
    sending: false
}

const handlers: THandler<ILoadingState> = {
    [SHOW_LOADING]: (state: ILoadingState): ILoadingState => ({
        ...state, loading: true
    }),
    [HIDE_LOADING]: (state: ILoadingState): ILoadingState => ({
        ...state, loading: false
    }),
    [SHOW_SENDING]: (state: ILoadingState): ILoadingState => ({
        ...state, sending: true
    }),
    [HIDE_SENDING]: (state: ILoadingState): ILoadingState => ({
        ...state, sending: false
    }),
    DEFAULT: (state: ILoadingState): ILoadingState => state,
}

export const LoadingReducer = (state: ILoadingState = initialState, action: IAction): ILoadingState => {
    const handle = handlers[action.type] || handlers["DEFAULT"];
    return handle(state)
}