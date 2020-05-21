import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import styles from './carticon.module.scss';

class CartIcon extends React.Component {
    render(){
        return (
            <div className={styles["cart-icon"]}>
                <Link to="/react-shopping-cart/cart">
                    <span className={`icon icon-shopping-cart`}>
                        <span className={styles.count}>{this.props.cartCount}</span>
                    </span>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
      cartCount: store.cart.cartCount
    }
}

export default connect(mapStateToProps)(CartIcon);