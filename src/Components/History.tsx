import React, {useEffect} from "react";
import {IAppState, IHistory} from "../Models";
import {useSelector, useDispatch} from "react-redux";
import {loadHistory} from "../Actions/Actions";

export const History: React.FC = (): JSX.Element => {
    // const dispatch = useDispatch()
    const history: IHistory[] = useSelector((state: IAppState) => state.HistoryState.history)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadHistory({number: 100, word: 'mama'}))
        // eslint-disable-next-line
    }, [])


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