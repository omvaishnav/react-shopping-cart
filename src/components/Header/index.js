import React from 'react';
import logo from '../../assets/media/logo.svg';
import Search from './Search';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
    return (
        <header className="app-header">
            <Link to="/react-shopping-cart"><img src={logo} className="logo" alt="logo" /></Link>
            <div className="pull-right">
                <Search />
                <CartIcon />
            </div>
        </header>
    )
}
export default Header;