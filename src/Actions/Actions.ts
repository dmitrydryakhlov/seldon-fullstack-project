import {HIDE_ALERT, HIDE_LOADING, LOAD_HISTORY, SHOW_ALERT, SHOW_LOADING} from "./ActionTypes";
import {IAlert, IFSAAction, IHistory, IRequest} from "../Models";

export const showAlert = (alert: IAlert): IFSAAction<IAlert> => ({
    type: SHOW_ALERT,
    payload: alert
})

export const hideAlert = (): IFSAAction<IAlert> => ({
    type: HIDE_ALERT
})

export const showLoading = (): IFSAAction<undefined> => ({
    type: SHOW_LOADING,
})

export const hideLoading = (): IFSAAction<undefined> => ({
    type: HIDE_LOADING
})

export const loadHistory = (request: IRequest): Function => {
    return async (dispatch: Function) => {
        dispatch(showLoading());
        let history: IHistory[];
        try {
            const response = await fetch('http://localhost:3000/hiistory', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            });
            history = await response.json()
        } catch (e) {
            history = [{
                responseTime: 634,
                request: {word: 'mama', number: 24},
                response: {
                    count: 4,
                    square: 576,
                },
                action: 'post',
                requestId: 'kjdsfhskeurhq'
            }, {
                responseTime: 634,
                request: {word: 'mama', number: 24},
                response: {
                    count: 4,
                    square: 576,
                },
                action: 'post',
                requestId: 'lkajwdlaijd'
            }]
            setTimeout(() => {
                dispatch({type: LOAD_HISTORY, payload: history})
                dispatch(hideLoading());
            }, 5000);
        }
    }
}
