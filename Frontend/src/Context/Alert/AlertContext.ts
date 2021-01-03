import {createContext} from 'react'
import {IAlertContext} from "../../Models";
import {EAlertStatus} from "../../Enums";

export const defaultAlertContext: IAlertContext = {
    visible: false,
    alert: {
        type: EAlertStatus.WARNING,
        text: ''
    },
    showAlert: () => {
    },
    hideAlert: () => {
    }
}

export const AlertContext = createContext<IAlertContext>(defaultAlertContext);