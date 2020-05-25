import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { addToCart, updateCartCount } from '../../Redux/Actions/cartAction';
import { formatPrice } from './productHelper';
import styles from './product.module.scss';
import { updateToastMessage } from '../../Redux/Actions/productsAction';

class Product extends React.Component {
    addToCart = (product) => {
        this.props.addToCart(product)
        this.props.updateCartCount(this.props.cartCount + 1)
        this.props.updateToastMessage("Added to Cart")
    }
    render(){
        const productData = {
            name: this.props.item.name,
            image: this.props.item.image,
            price: this.props.item.price,
            discount: this.props.item.discount,
            qty: 1
        }
        return (
            <div className={styles["product-item"]}>
                <img src={this.props.item.image} alt={this.props.item.name} width="100%" />
                <div className={styles.name}>{this.props.item.name}</div>
                <div className={styles.price}>
                    <span className={styles.srp}>{formatPrice(this.props.item.price.actual)} </span>
                    {this.props.item.price.actual < this.props.item.price.display && (
                        <span className={styles.mrp}>{formatPrice(this.props.item.price.display)}</span>
                    )}
                    <span className={`${styles.discount} no-wrap`}> {formatPrice(this.props.item.discount)}% off</span>
                </div>
                <div className={styles.action}><span className="btn" onClick={() => this.addToCart(productData)}>Add to Cart</span></div>
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
    updateToastMessage
  },dispatch)
}
  
export default connect(mapStateToProps,mapActionsToProps)(Product);