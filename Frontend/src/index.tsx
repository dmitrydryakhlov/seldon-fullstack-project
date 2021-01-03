import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import './Styles/index.scss';
import {App} from './Components/App';

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql?',
    cache: new InMemoryCache(),
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById('root')
);
