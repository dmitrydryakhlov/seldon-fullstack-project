import React, {useEffect} from "react";
import {IAppState, IHistory, IRequest} from "../Models";
import {connect} from "react-redux";
import {loadHistory} from "../Actions/Actions";

interface IStateProps {
    history: IHistory[];
}

interface IDispatchProps {
    loadHistory: (request: IRequest) => Function
}

type TProps = IStateProps & IDispatchProps;

const HistoryConnect: React.FC<TProps> = ({history, loadHistory}: TProps): JSX.Element => {

    useEffect(() => {
        if (!history.length) {
            loadHistory({number: 100, word: 'mama'})
        }
        console.log(history);
        // eslint-disable-next-line
    }, [history])


    return (
        <table className="table">
            <thead>
            <tr>
                {['response_time', 'request', 'response', 'action'].map((header, index) => (
                    <th scope="col" key={header}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {history.map(historyElem => (
                    <tr key={historyElem.requestId}>
                        <th scope="row">{historyElem.responseTime}</th>
                        <th>{JSON.stringify(historyElem.request)}</th>
                        <th>{JSON.stringify(historyElem.response)}</th>
                        <th>{historyElem.action}</th>
                    </tr>
                )
            )}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state: IAppState): IStateProps => ({
    history: state.HistoryState.history
})

const mapDispatchToProps = {
    loadHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryConnect)