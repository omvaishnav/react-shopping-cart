import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { addToCart, updateCartCount } from '../../Redux/Actions/cartAction';
import { formatPrice } from './productHelper';
import './product.scss';

class Product extends React.Component {
    addToCart = (product) => {
        this.props.addToCart(product)
        this.props.updateCartCount(this.props.cartCount + 1)
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
            <div className="product-item">
                <img src={this.props.item.image} alt={this.props.item.name} width="100%" />
                <div className="name">{this.props.item.name}</div>
                <div className="price">
                    <span className="srp">{formatPrice(this.props.item.price.actual)} </span>
                    {this.props.item.price.actual < this.props.item.price.display && (
                        <span className="mrp">{formatPrice(this.props.item.price.display)}</span>
                    )}
                    <span className="discount no-wrap"> {formatPrice(this.props.item.discount)}% off</span>
                </div>
                <div className="action"><span className="btn" onClick={() => this.addToCart(productData)}>Add to Cart</span></div>
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
    updateCartCount
  },dispatch)
}
  
export default connect(mapStateToProps,mapActionsToProps)(Product);