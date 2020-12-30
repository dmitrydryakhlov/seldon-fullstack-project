import {combineReducers} from 'redux'
import {AlertReducer} from "./AlertReducer";
import {IAppState} from "../Models";
import {LoadingReducer} from "./LoadingReducer";
import {HistoryReducer} from "./HistoryReducer";

export const rootReducer = combineReducers<IAppState>({
    AlertState: AlertReducer,
    LoadingState: LoadingReducer,
    HistoryState: HistoryReducer
})