import React, {useEffect} from "react";
import Form from "../Components/Form";
import {IAppState} from "../Models";
import {Loader} from "../Components/Loader";
import {useDispatch, useSelector} from "react-redux";
import {History} from "../Components/History";
import {loadHistory} from "../Actions/Actions";

export const Home: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const loading: boolean = useSelector((state: IAppState) => state.LoadingState.loading);

    useEffect(() => {
        dispatch(loadHistory())
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Form/>
            <hr/>
            {loading ? <Loader/> : <History/>}
        </>
    )
}
