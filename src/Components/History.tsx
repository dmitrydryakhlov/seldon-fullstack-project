import React from "react";
import {IAppState, IHistory} from "../Models";
import {useSelector} from "react-redux";

export const History: React.FC = (): JSX.Element => {
    const history: IHistory[] = useSelector((state: IAppState) => state.HistoryState.history)

    return (
        <table className="table">
            <thead>
            <tr>
                {['response_time', 'request', 'response', 'action'].map((header) => (
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