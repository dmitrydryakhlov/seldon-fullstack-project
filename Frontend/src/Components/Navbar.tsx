import React from "react";
import {NavLink} from 'react-router-dom'

export const Navbar = (): JSX.Element => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            Seldon test project
        </div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>Home</NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to="/about">Documentation</NavLink>
            </li>
        </ul>
    </nav>
)