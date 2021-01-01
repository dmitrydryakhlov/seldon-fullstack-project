import React from "react";
import {connect} from "react-redux";
import {CSSTransition} from 'react-transition-group'
import {IAlert, IAppState} from "../Models";
import {hideAlert} from "../Actions/Actions";
import {EAlertStatus} from "../Enums";

interface IStateProps {
    alert?: IAlert;
    visible: boolean;
}

interface IDispatchProps {
    hideAlert: () => void;
}

type TProps = IStateProps & IDispatchProps;

const Alert: React.FC<TProps> = ({alert, visible, hideAlert}) => {
    return (
        <CSSTransition in={visible} timeout={{enter: 700, exit: 500}} classNames='alert' unmountOnExit mountOnEnter>
            <div className={`alert alert-${alert?.type || 'warning'} alert-dismissible`}>
                <span><strong>{alert?.type === EAlertStatus.SUCCESS ? 'Success!' : 'Attention!'} &nbsp;</strong>{alert?.text}</span>
                <button onClick={hideAlert} type="button" className="close" data-dismiss="alert"
                        aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
}

const mapStateToProps = (state: IAppState): IStateProps => ({
    alert: state.AlertState.alert,
    visible: state.AlertState.visible,
})

const mapDispatchToProps: IDispatchProps = {
    hideAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert)