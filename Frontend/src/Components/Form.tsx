import React, {useState} from "react";

interface IOwnProps {
    handleConfirm: (word: string, number: string, handleReset: () => void) =>
        (event: React.SyntheticEvent) => Promise<void>;
    sending: boolean;
}

export const Form: React.FC<IOwnProps> = ({handleConfirm, sending}) => {
    const [inputText, setInputText] = useState('');
    const [inputNumber, setInputNumber] = useState('');

    const handleSubmit = (event: React.SyntheticEvent): void => {
        event.preventDefault();
    }

    const handleReset = (): void => {
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
                <button
                    onClick={handleConfirm(inputText, inputNumber, handleReset)}
                    className="btn btn-primary"
                    disabled={sending || (!inputText.length && !inputNumber.length)}
                >
                    Confirm
                </button>
                <button onClick={handleReset} className="btn btn-warning" disabled={sending}>Reset</button>
            </div>
        </form>
    )
}