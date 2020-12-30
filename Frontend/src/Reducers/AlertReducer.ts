import {HIDE_ALERT, SHOW_ALERT} from "../Actions/ActionTypes";
import {IAlert, IAlertState, IFSAAction, THandler} from "../Models";
import {EAlertStatus} from "../Enums";

const initialState: IAlertState = {
    alert: {
        type: EAlertStatus.WARNIGN,
        text: 'Attention!'
    },
    visible: false
}

const handlers: THandler<IAlertState, IAlert> = {
    [SHOW_ALERT]: (state: IAlertState, action?: IFSAAction<IAlert>): IAlertState => ({
        ...state,
        alert: action?.payload,
        visible: true
    }),
    [HIDE_ALERT]: (state: IAlertState): IAlertState => ({
        ...state,
        visible: false
    }),
    DEFAULT: (state: IAlertState): IAlertState => state,
}

export const AlertReducer = (state: IAlertState = initialState, action: IFSAAction<IAlert>): IAlertState => {
    const handle = handlers[action.type] || handlers["DEFAULT"];
    return handle(state, action)
}