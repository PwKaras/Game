import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import SideDrawer from './SideDrawer';
import './NavLinks.css'


const NavLinks = props => {
    const [showDrawer, setShowDrawer] = useState(false);

    const toggleDrawerHandler = () => {
        // if (showDrawer === "close") {
        //     setShowDrawer("open");
        // }
        // else {
        //     setShowDrawer("close");
        // }
        setShowDrawer(!showDrawer);
    };

      return (
        <>
            <Button
                drawer={'button-drawer'}
                onClick={toggleDrawerHandler}
            >
                <span />
                <span />
                <span />
            </Button>
            <SideDrawer
                show={showDrawer}
                
            >
                <ul className="nav-links">
                    <li>
                        <NavLink
                            to="/" exact
                            className="nav-links">
                            MAIN PAGE
                                    </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/game"
                            className="nav-links">
                            GAME
                                    </NavLink>
                    </li>
                </ul>
            </SideDrawer>
            <ul className="nav-links">

                <li>
                    <NavLink
                        className="nav-links" to="/" exact> MAIN PAGE</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/game"
                        className="nav-links">
                        GAME
                </NavLink>
                </li>
            </ul>
        </>
    );
}

export default NavLinks;