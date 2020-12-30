import React from "react";
import {connect} from "react-redux";
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

const Alert: React.FC<TProps> = ({alert, visible, hideAlert}) => (
    visible ? (
        <div className={`alert alert-${alert?.type || 'warning'} alert-dismissible`}>
            <span className="pre"><strong>{alert?.type === EAlertStatus.SUCCESS ? 'Success!' : 'Attention!'} &nbsp;</strong>{alert?.text}</span>
            <button onClick={hideAlert} type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    ) : null
)

const mapStateToProps = (state: IAppState): IStateProps => ({
    alert: state.AlertState.alert,
    visible: state.AlertState.visible,
})

const mapDispatchToProps: IDispatchProps = {
    hideAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert)