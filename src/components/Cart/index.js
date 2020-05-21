import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { addToCart, updateCartCount, removeFromCart } from '../../Redux/Actions/cartAction';
import { formatPrice } from '../Product/productHelper';
import CartSummary from './CartSummary';

import styles from './cart.module.scss';

class Cart extends React.Component {
    handleIncrease = (product) => {
        this.props.addToCart(product)
        this.props.updateCartCount(this.props.cartCount + 1)
    }
    handleDecrease = (product) => {
        let option = {
            product: product,
            removalType: "decrease"
        }
        this.props.removeFromCart(option)
        this.props.updateCartCount(this.props.cartCount - 1)
    }
    removeCartItem = (product) => {
        let option = {
            product: product,
            removalType: "remove"
        }
        this.props.removeFromCart(option)
        this.props.updateCartCount(this.props.cartCount - product.qty)
    }

    render(){
        return (
            <div className={styles.cart}>
                {this.props.cart.length > 0 ? (
                    <div className={styles["cart-items"]}>
                    {
                        this.props.cart.map((item,i) => {
                            return (
                                <div className={styles["product-item"]} key={i}>
                                    <img className="pull-left" src="https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90" alt="" width="30%" />
                                    <div className={styles["item-content"]}>
                                        <div className={styles.name}>{item.name}</div>
                                        <div className={styles.price}>
                                            <span className={styles.srp}>{formatPrice(item.price.actual)} </span>
                                            {item.price.actual <item.price.display && (
                                                <span className={styles.mrp}>{formatPrice(item.price.display)}</span>
                                            )}
                                            <span className={`${styles.discount} no-wrap`}> {formatPrice(item.discount)}% off</span>
                                        </div>
                                        <div className={styles.counter}>
                                            <span className={styles.decrease} onClick={() => this.handleDecrease(item)}><span className="icon icon-minus"></span></span>
                                            <span className={styles.count}>{item.qty}</span>
                                            <span className={styles.increase} onClick={() => this.handleIncrease(item)}><span className="icon icon-plus"></span></span>
                                        </div>
                                        <div className={styles.actions}><span className={styles["remove-item"]} onClick={() => this.removeCartItem(item)}>Remove</span></div>
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