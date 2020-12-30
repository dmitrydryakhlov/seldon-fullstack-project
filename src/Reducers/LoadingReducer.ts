import {HIDE_LOADING, SHOW_LOADING} from "../Actions/ActionTypes";
import {IFSAAction, ILoadingState} from "../Models";

const initialState: ILoadingState = {
    loading: false
}

type THandler = {
    [key: string]: (state: ILoadingState) => ILoadingState
}


const handlers: THandler = {
    [SHOW_LOADING]: (state: ILoadingState): ILoadingState => ({
        ...state, loading: true
    }),
    [HIDE_LOADING]: (state: ILoadingState): ILoadingState => ({
        ...state, loading: false
    }),
    DEFAULT: (state: ILoadingState): ILoadingState => state,
}

export const LoadingReducer = (state: ILoadingState = initialState, action: IFSAAction<undefined>): ILoadingState => {
    const handle = handlers[action.type] || handlers["DEFAULT"];
    return handle(state)
}