import React from "react";
import {IHistory} from "../Models";

interface IOwnProps {
    deleteItem: Function,
    history: IHistory[]
}

/**
 * Show the requests' history.
 * @param deleteItem
 * @param history
 */
export const History: React.FC<IOwnProps> = ({deleteItem, history}): JSX.Element => {
    return (
        <table className="table">
            <thead>
            <tr>
                {['response_time', 'request', 'response', 'action', ''].map((header: string): JSX.Element => (
                    <th scope="col" key={header}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {/*new first*/}
            {history.slice().reverse().map(historyElem => (
                    <tr key={historyElem.requestId}>
                        <td>{historyElem.responseTime.toFixed()}</td>
                        <td>{JSON.stringify(historyElem.request)}</td>
                        <td>{JSON.stringify(historyElem.response)}</td>
                        <td>{historyElem.action}</td>
                        <td>
                            <button className="btn btn-sm btn-dark"
                                    onClick={deleteItem(historyElem.requestId)}>&times;</button>
                        </td>
                    </tr>
                )
            )}
            </tbody>
        </table>
    )
}