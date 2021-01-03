import React, {useContext} from "react";
import {CSSTransition} from 'react-transition-group'
import {IAlertContext} from "../Models";
import {EAlertStatus} from "../Enums";
import {AlertContext} from "../Context/Alert/AlertContext";

export const Alert: React.FC = () => {
    const {alert, hideAlert, visible} = useContext<IAlertContext>(AlertContext);
    return (
        <CSSTransition
            in={visible}
            timeout={{enter: 700, exit: 500}}
            classNames='alert'
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert?.type || 'warning'} alert-dismissible`}>
                <span><strong>{alert?.type === EAlertStatus.SUCCESS ? 'Success!' : 'Attention!'} &nbsp;</strong>{alert?.text}</span>
                <button onClick={() => hideAlert()} type="button" className="close" data-dismiss="alert"
                        aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
}