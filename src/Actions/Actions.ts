import {
    HIDE_ALERT,
    HIDE_LOADING,
    HIDE_SENDING,
    LOAD_HISTORY,
    SEND_DATA,
    SHOW_ALERT,
    SHOW_LOADING,
    SHOW_SENDING
} from "./ActionTypes";
import {IAction, IAlert, IFSAAction, IHistory, IRequest, IResponse} from "../Models";

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

export const loadHistory = (): Function => async (dispatch: Function) => {
    dispatch(showLoading());
    let history: IHistory[];
    try {
        const data = await fetch('http://localhost:3000/history', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        history = await data.json()
        setTimeout(() => {
            dispatch({type: LOAD_HISTORY, payload: history})
            dispatch(hideLoading());
        }, 2000);
    } catch (e) {
        history = [{
            responseTime: 634,
            request: {word: 'mama', number: '24'},
            response: {
                count: 4,
                square: 576,
            },
            action: 'post',
            requestId: 'kjdsfhskeurhq'
        }, {
            responseTime: 634,
            request: {word: 'mama', number: '24'},
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
        }, 2000);
    }
}


export const sendData = (data: IRequest): Function => async (dispatch: Function) => {
    dispatch(showSending());
    let response: IResponse;
    try {
        const responseData = await fetch('http://localhost:3000/converter', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        response = await responseData.json()
    } catch (e) {
        setTimeout(() => {
            dispatch({
                type: SEND_DATA,
                payload: response || {count: data.word.length, square: Number(data.number) ** 2}
            })
            dispatch(hideSending());
            dispatch(loadHistory())
        }, 3000);
    }
}
