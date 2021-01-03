import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from "../Pages/Home";
import {About} from "../Pages/About";
import {Navbar} from "./Navbar";
import {AlertState} from "../Context/Alert/AlertState";
import {Alert} from "./Alert";

export const App = (): JSX.Element => (
    <BrowserRouter>
        <AlertState>
            <Navbar/>
            <div className="container mt-4">
                <Alert/>
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/about'} component={About}/>
                </Switch>
            </div>
        </AlertState>
    </BrowserRouter>
)