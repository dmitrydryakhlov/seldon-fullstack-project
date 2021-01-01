import {
    HIDE_ALERT,
    HIDE_LOADING,
    HIDE_SENDING,
    LOAD_HISTORY,
    SHOW_ALERT,
    SHOW_LOADING,
    SHOW_SENDING
} from "./ActionTypes";
import {IAction, IAlert, IFSAAction, IHistory, IRequest, IResponse} from "../Models";
import {EAlertStatus} from "../Enums";

export const showAlert = (alert: IAlert): IFSAAction<IAlert> => ({
    type: SHOW_ALERT,
    payload: alert
})

export const hideAlert = (): IFSAAction<IAlert> => ({
    type: HIDE_ALERT
})

export const showLoading = (): IAction => ({
    type: SHOW_LOADING,
})

export const hideLoading = (): IAction => ({
    type: HIDE_LOADING
})

export const showSending = (): IAction => ({
    type: SHOW_SENDING,
})

export const hideSending = (): IAction => ({
    type: HIDE_SENDING
})

/**
 * Update the request history.
 */
export const loadHistory = (): Function => {
    return async (dispatch: Function) => {
        dispatch(showLoading());
        let history: IHistory[];
        try {
            const data: Response = await fetch('http://localhost:3001/history', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'responseType': 'json',
                },
            });
            history = await data.json()

            dispatch({type: LOAD_HISTORY, payload: history})
            dispatch(hideLoading());
        } catch (error: any) {
            dispatch(showAlert({type: EAlertStatus.WARNIGN, text: error.message}))
            dispatch(hideLoading());
        }
    };
}

/**
 * Send data to server.
 * @param data
 */
export const sendData = (data: IRequest): Function => async (dispatch: Function) => {
    dispatch(showSending());
    try {
        const responseData: Response = await fetch('http://localhost:3001/converter', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'responseType': 'json',
            },
            body: JSON.stringify(data)
        });
        const response: IResponse = await responseData.json()
        dispatch(hideSending());
        dispatch(showAlert({
            type: responseData.status === 200 ? EAlertStatus.SUCCESS : EAlertStatus.WARNIGN,
            text: `${JSON.stringify(data)} - ${JSON.stringify(response)}`
        }))
        dispatch(loadHistory());
    } catch (e: any) {
        dispatch(showAlert({type: EAlertStatus.WARNIGN, text: e.message}))
        dispatch(hideSending());
    }
}

/**
 * Delete item from history.
 * @param id
 */
export const deleteItem = (id: string): Function => {
    return async (dispatch: Function) => {
        try {
            const data: Response = await fetch('http://localhost:3001/history', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'responseType': 'json',
                },
                body: JSON.stringify({requestId: id})
            });
            const response = await data.json();
            dispatch(showAlert({
                type: data.status === 200 ? EAlertStatus.SUCCESS : EAlertStatus.WARNIGN,
                text: JSON.stringify(response)
            }))
            dispatch(loadHistory());
        } catch (error: any) {
            dispatch(showAlert({type: EAlertStatus.WARNIGN, text: error.message}))
        }
    };
}
