import {IAlert, IAlertContext, IFSAAction, THandler} from "../../Models";
import {defaultAlertContext} from "./AlertContext";
import {HIDE_ALERT, SHOW_ALERT} from "./ActionTypes";

const handlers: THandler<IAlertContext, IAlert> = {
    [SHOW_ALERT]: (state: IAlertContext, action?: IFSAAction<IAlert>): IAlertContext => ({
        ...state,
        alert: action?.payload,
        visible: true
    }),
    [HIDE_ALERT]: (state: IAlertContext): IAlertContext => ({
        ...state,
        visible: false
    }),
    DEFAULT: (state: IAlertContext): IAlertContext => state,
}

export const AlertReducer = (state: IAlertContext = defaultAlertContext, action: IFSAAction<IAlert>): IAlertContext => {
    const handle = handlers[action.type] || handlers["DEFAULT"];
    return handle(state, action)
}