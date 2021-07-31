import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper">
            <div className='logo'>
                <a href="#" className="brand-logo">
                    Add your tasks
                </a>
            </div>
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
