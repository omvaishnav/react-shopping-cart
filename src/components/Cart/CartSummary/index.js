import React from 'react';
import './cart-summary.scss';
import { formatPrice } from '../../Product/productHelper';

function CartSummary(props) {
    let mrp = 0,srp = 0,item = 0;
    for(let i = 0; i < props.products.length; i++){
        srp += props.products[i].price.actual * props.products[i].qty;
        mrp += props.products[i].price.display * props.products[i].qty;
        item += 1 * props.products[i].qty;
    }
    
    return (
        <div class="product-item cart-summary">
            <div class="title">Price Details</div>
            <div class="summary-content">
                <div class="item price-item">
                    <div className="label">Price ({item} item)</div>
                    <div className="value text-right">{formatPrice(mrp)}</div>
                </div>
                <div class="item discount-item">
                    <div className="label">Discount</div>
                    <div className="value text-right">{formatPrice(mrp - srp)}</div>
                </div>
            </div>
            <div class="item total-payable">
                <div className="label">Total Payable</div>
                <div className="value text-right">{formatPrice(srp)}</div>
            </div>
        </div>
    )
}

export default CartSummary;