import React, {useState} from "react";
import {connect} from "react-redux";
import {IAlert, IAlertState} from "../Models";
import {hideAlert, showAlert} from "../Actions/Actions";

interface IDispatchProps {
    showAlert: (alert: IAlert) => void;
    hideAlert: () => void;
}

interface IStateProps {
    alert?: IAlert;
    visible: boolean;
}

type TProps = IDispatchProps & IStateProps;

const Form: React.FC<TProps> = ({hideAlert, showAlert, alert}) => {
    const [inputText, setInputText] = useState('');
    const [inputNumber, setInputNumber] = useState('');

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
    }

    const handleConfirm = () => {
        console.log(JSON.stringify({word: inputText, number: inputNumber}))
    }

    const handleReset = () => {
        setInputText('')
        setInputNumber('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="enter word"
                    value={inputText}
                    name="text"
                    onChange={(e) => setInputText(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="enter number"
                    value={inputNumber}
                    name="text"
                    onChange={(e) => setInputNumber(e.target.value)}
                />
                <button onClick={handleConfirm} className="btn btn-primary">Confirm</button>
                <button onClick={handleReset} className="btn btn-warning">Reset</button>
            </div>
        </form>
    )
}

const mapStateToProps = ({alert, visible}: IAlertState): IStateProps => ({
    alert,
    visible
})

const mapDispatchToProps: IDispatchProps = {
    hideAlert,
    showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);