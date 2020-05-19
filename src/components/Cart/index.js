import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { addToCart, updateCartCount, removeFromCart } from '../../Redux/Actions/cartAction';
import { formatPrice } from '../Product/productHelper';
import CartSummary from './CartSummary';

import './cart.scss';

class Cart extends React.Component {
    handleIncrease = (product) => {
        this.props.addToCart(product)
        this.props.updateCartCount(this.props.cartCount + 1)
    }
    handleDecrease = (product) => {
        if(product.qty > 1) {
            this.props.removeFromCart(product)
            this.props.updateCartCount(this.props.cartCount - 1)
        }
    }
    removeCartItem = (product) => {
        this.props.removeFromCart(product)
        this.props.updateCartCount(this.props.cartCount - 1)
    }

    render(){
        return (
            <div className="cart">
                {this.props.cart.length > 0 ? (
                    <div className="cart-items">
                    {
                        this.props.cart.map((item,i) => {
                            return (
                                <div className="product-item" key={i}>
                                    <img className="pull-left" src="https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90" alt="" width="30%" />
                                    <div className="item-content">
                                        <div className="name">{item.name}</div>
                                        <div className="price">
                                            <span className="srp">{formatPrice(item.price.actual)} </span>
                                            {item.price.actual <item.price.display && (
                                                <span className="mrp">{formatPrice(item.price.display)}</span>
                                            )}
                                            <span className="discount no-wrap"> {formatPrice(item.discount)}% off</span>
                                        </div>
                                        <div className="counter">
                                            <span className="decrease" onClick={() => this.handleDecrease(item)}><span className="icon icon-minus"></span></span>
                                            <span className="count">{item.qty}</span>
                                            <span className="increase" onClick={() => this.handleIncrease(item)}><span className="icon icon-plus"></span></span>
                                        </div>
                                        <div className="action"><span className="remove-item" onClick={() => this.removeCartItem(item)}>Remove</span></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                ) : <div>No Item</div>}
                {this.props.cart.length > 0 ? <CartSummary products={this.props.cart} /> : null}
            </div>
        )
    }
}


const mapStateToProps = (store) => {
  return {
    cart: store.cart.cart,
    cartCount: store.cart.cartCount
  }
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    addToCart,
    updateCartCount,
    removeFromCart
  },dispatch)
}

export default connect(mapStateToProps,mapActionsToProps)(Cart);