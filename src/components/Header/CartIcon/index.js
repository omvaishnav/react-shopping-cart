import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import './carticon.scss';

class CartIcon extends React.Component {
    render(){
        return (
            <div className="cart-icon">
                <Link to="/cart">
                    <span className="icon icon-shopping-cart">
                        <span className="count">{this.props.cartCount}</span>
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