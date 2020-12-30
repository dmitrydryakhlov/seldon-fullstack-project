import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from "../Pages/Home";
import {About} from "../Pages/About";
import {Navbar} from "./Navbar";
import Alert from "./Alert";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container mt-4">
                <Alert />
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/about'} component={About}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
