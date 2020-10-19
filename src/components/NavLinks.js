import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css'

const NavLinks = props => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink 
                className="nav-links" to="/" exact> MAIN PAGE</NavLink>
            </li>
            <li>
                <NavLink to="/game"
                className="nav-links"
                >
                    GAME
                </NavLink>
            </li>
        </ul>
    );
}

export default NavLinks;