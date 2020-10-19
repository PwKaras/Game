import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavLinks from './NavLinks';

const Header = () => {
    return (
        <header className="main-header">
            <h1 className="main-header__title">
                <Link to="/">
                    Catch my if you can
                   </Link>
            </h1>
            <nav className="main-header__header-nav">
                <NavLinks />
            </nav>
        </header >
    );
}

export default Header;
