import React, {useReducer} from "react";
import {AlertContext, defaultAlertContext} from "./AlertContext";
import {AlertReducer} from "./AlertReducer";
import {EAlertStatus} from "../../Enums";
import {HIDE_ALERT, SHOW_ALERT} from "./ActionTypes";

export const AlertState: React.FC = ({children}): JSX.Element => {
    const [state, dispatch] = useReducer(AlertReducer, defaultAlertContext)

    const showAlert = ({text = 'Attention', type = EAlertStatus.WARNING}): void => {
        dispatch({
            type: SHOW_ALERT,
            payload: {text, type}
        })
    }

    const hideAlert = () => dispatch({type: HIDE_ALERT, payload: {type: EAlertStatus.WARNING, text: ''}})

    return (
        <AlertContext.Provider value={{
            showAlert,
            hideAlert,
            alert: state.alert,
            visible: state.visible
        }}>
            {children}
        </AlertContext.Provider>
    )
}