import React, {useCallback, useContext} from "react";
import {Form} from "../Components/Form";
import {Loader} from "../Components/Loader";
import {History} from "../Components/History";
import {useMutation, useQuery} from "@apollo/client";
import {DELETE_ITEM, GET_HISTORY, SEND_DATA} from "../GraphQLActions/queries";
import {IAlertContext, IHistory, IRequest, IResponse} from "../Models";
import {EAlertStatus} from "../Enums";
import {AlertContext} from "../Context/Alert/AlertContext";

export const Home: React.FC = (): JSX.Element => {
    const {
        loading: loadingHistory,
        data: history,
        refetch: getHistory
    } = useQuery<{ getHistory: IHistory[] }>(GET_HISTORY, {
        notifyOnNetworkStatusChange: true
    });
    const [deleteItemMutation] = useMutation(DELETE_ITEM)
    const [send, {loading: sending}] = useMutation<{ sendData: IResponse }, { request: IRequest }>(SEND_DATA, {
        errorPolicy: "all"
    });
    const {showAlert} = useContext<IAlertContext>(AlertContext);

    /**
     * Delete element from the history.
     * @param id elem.id to be deleted.
     */
    const handleClick = useCallback((id: string) => async (): Promise<void> => {
        await deleteItemMutation({variables: {id: id}});
        getHistory();
        // eslint-disable-next-line
    }, [])


    /**
     *
     * @param word word to send.
     * @param number number to send.
     * @param handleReset clear input area.
     */
    const handleConfirm = useCallback((word: string, number: string, handleReset: Function) =>
        async (): Promise<void> => {
            try {
                // @ts-ignore
                const {data: {sendData}} = await send({variables: {request: {word, number}}})
                showAlert({
                    type: EAlertStatus.SUCCESS,
                    text: `count: ${sendData.count} - square: ${sendData?.square}`
                })
                getHistory()
            } catch (error) {
                showAlert({
                    type: EAlertStatus.WARNING,
                    text: error?.networkError?.result?.errors[0]?.message
                })
            } finally {
                handleReset()
            }
            // eslint-disable-next-line
        }, []);

    return (
        <>
            <Form handleConfirm={handleConfirm} sending={sending}/>
            {loadingHistory ? <Loader/> : <History deleteItem={handleClick} history={history}/>}
        </>
    )
}
