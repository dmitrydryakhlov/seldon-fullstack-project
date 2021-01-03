import React from "react";
import {IHistory} from "../Models";

interface IOwnProps {
    deleteItem: (id: string) => (event: React.SyntheticEvent) => void,
    history?: {
        getHistory: IHistory[]
    }
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
            {history?.getHistory.length ? history?.getHistory.map(historyElem => (
                    <tr key={historyElem.requestId}>
                        <td>{parseFloat(historyElem.responseTime).toFixed()}</td>
                        <td>{`word: ${historyElem.request.word} - number: ${historyElem.request.number}`}</td>
                        <td>{`count: ${historyElem.response.count} - square: ${historyElem.response.square}`}</td>
                        <td>{historyElem.action}</td>
                        <td className="delete-button">
                            <button className="btn btn-sm btn-dark"
                                    onClick={deleteItem(historyElem.requestId)}>&times;</button>
                        </td>
                    </tr>
                )
            ) : <tr>
                <td colSpan={5} className="text-center">History is empty</td>
            </tr>}
            </tbody>
        </table>
    )
}