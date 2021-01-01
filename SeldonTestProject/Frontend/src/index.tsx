import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose} from 'redux';
import {Provider} from "react-redux";
import {createStore} from "redux";
import thunk from 'redux-thunk'
import './Styles/index.scss';
import App from './Components/App';
import {rootReducer} from "./Reducers/RootReducer";

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    )
))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
