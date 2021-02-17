import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo">
                React + TypeScript
            </a>
            <ul className="right hide-on-med-and-down">
                <li>
                    <NavLink to="/">ToDos</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Info</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar
