import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {IAppState, IHistory} from "../Models";
import {deleteItem} from "../Actions/Actions";

/**
 * Show the requests' history.
 */
export const History: React.FC = (): JSX.Element => {
    const history: IHistory[] = useSelector((state: IAppState) => state.HistoryState.history)
    const dispatch = useDispatch();

    /**
     * Delete element from the history.
     * @param id elem.id to be deleted.
     */
    const handleClick = (id: string) => (): void => {
        dispatch(deleteItem(id));
    }

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
                        <th scope="row">{historyElem.responseTime.toFixed()}</th>
                        <th>{JSON.stringify(historyElem.request)}</th>
                        <th>{JSON.stringify(historyElem.response)}</th>
                        <th>{historyElem.action}</th>
                        <th>
                            <button className="btn btn-sm btn-dark"
                                    onClick={handleClick(historyElem.requestId)}>&times;</button>
                        </th>
                    </tr>
                )
            )}
            </tbody>
        </table>
    )
}