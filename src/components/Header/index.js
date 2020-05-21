import React from 'react';
import logo from '../../assets/media/logo.svg';
import Search from './Search';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/react-shopping-cart"><img src={logo} className={styles.logo} alt="logo" /></Link>
            <div className="pull-right">
                <Search />
                <CartIcon />
            </div>
        </header>
    )
}
export default Header;