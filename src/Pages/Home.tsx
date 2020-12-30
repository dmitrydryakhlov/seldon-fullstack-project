import React from "react";
import Form from "../Components/Form";
import {IAppState} from "../Models";
import {Loader} from "../Components/Loader";
import {connect} from "react-redux";
import HistoryConnect from "../Components/HistoryConnect";

interface IStateProps {
    loading: boolean;
}

const Home: React.FC<IStateProps> = ({loading}): JSX.Element => (
    <>
        <Form/>
        <hr/>
        {loading ? <Loader/> : <HistoryConnect/>}
    </>
)


const mapStateToProps = (state: IAppState): IStateProps => ({
    loading: state.LoadingState.loading
})

export default connect(mapStateToProps, null)(Home);


