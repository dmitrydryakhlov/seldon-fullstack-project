import React from "react";
import {IAlert, IAppState} from "../Models";
import {connect} from "react-redux";
import {hideAlert, showAlert} from "../Actions/Actions";

interface IStateProps {
    alert?: IAlert;
    visible: boolean;
}

interface IDispatchProps {
    showAlert: (alert: IAlert) => void;
    hideAlert: () => void;
}

type TProps = IStateProps & IDispatchProps;

const Alert: React.FC<TProps> = ({alert, visible, hideAlert}) => {
    if (!visible) return null;

    return (
        <div className={`alert alert-${alert?.type || 'warning'} alert-dismissible`}>
            <strong>Attention!</strong>
            {alert?.text}
            <button onClick={hideAlert} type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

const mapStateToProps = (state: IAppState): IStateProps => ({
    alert: state.AlertState.alert,
    visible: state.AlertState.visible,
})

const mapDispatchToProps: IDispatchProps = {
    showAlert,
    hideAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert)