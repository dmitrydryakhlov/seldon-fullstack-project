import React, {useState} from "react";
import {connect} from "react-redux";
import {IAlert, IAppState, IRequest} from "../Models";
import {hideAlert, sendData} from "../Actions/Actions";

interface IDispatchProps {
    hideAlert: () => void;
    sendData: (data: IRequest) => Function;
}

interface IStateProps {
    alert?: IAlert;
    visible: boolean;
    sending: boolean;
}

type TProps = IDispatchProps & IStateProps;

const Form: React.FC<TProps> = ({sending, sendData}) => {
    const [inputText, setInputText] = useState('');
    const [inputNumber, setInputNumber] = useState('');

    const handleSubmit = (event: React.SyntheticEvent): void => {
        event.preventDefault();
    }

    const handleConfirm = (): void => {
        sendData({word: inputText, number: inputNumber})
        handleReset();
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
                    disabled={sending}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="enter number"
                    value={inputNumber}
                    name="text"
                    onChange={(e) => setInputNumber(e.target.value)}
                    disabled={sending}
                />
                <button onClick={handleConfirm} className="btn btn-primary"
                        disabled={sending || (!inputText.length && !inputNumber.length)}>Confirm
                </button>
                <button onClick={handleReset} className="btn btn-warning" disabled={sending}>Reset</button>
            </div>
        </form>
    )
}

const mapStateToProps = ({
                             LoadingState:
                                 {
                                     sending
                                 }, AlertState:
        {
            alert, visible
        }
                         }: IAppState): IStateProps => (
    {
        alert,
        visible,
        sending
    }
)

const mapDispatchToProps: IDispatchProps =
    {
        hideAlert,
        sendData
    }

export default connect(mapStateToProps, mapDispatchToProps)(Form);