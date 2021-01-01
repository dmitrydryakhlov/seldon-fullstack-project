import React, {useCallback, useEffect} from "react";
import Form from "../Components/Form";
import {IAppState, IHistory} from "../Models";
import {Loader} from "../Components/Loader";
import {useDispatch, useSelector} from "react-redux";
import {History} from "../Components/History";
import {deleteItem, loadHistory} from "../Actions/Actions";

export const Home: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const loading: boolean = useSelector((state: IAppState) => state.LoadingState.loading);
    const history: IHistory[] = useSelector((state: IAppState) => state.HistoryState.history)

    /**
     * Delete element from the history.
     * @param id elem.id to be deleted.
     */
    const handleClick = useCallback((id: string) => (): void => {
        dispatch(deleteItem(id))
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        dispatch(loadHistory())
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Form/>
            <hr/>
            {loading ? <Loader/> : <History deleteItem={handleClick} history={history}/>}
        </>
    )
}
