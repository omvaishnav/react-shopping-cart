import React from 'react';
import styles from './cart-summary.module.scss';
import { formatPrice } from '../../Product/productHelper';

function CartSummary(props) {
    let mrp = 0,srp = 0,item = 0;
    for(let i = 0; i < props.products.length; i++){
        srp += props.products[i].price.actual * props.products[i].qty;
        mrp += props.products[i].price.display * props.products[i].qty;
        item += 1 * props.products[i].qty;
    }
    
    return (
        <div className={`${styles["cart-summary"]}`}>
            <div className={styles.title}>Price Details</div>
            <div className={styles["summary-content"]}>
                <div className={`${styles.item} ${styles["price-item"]}`}>
                    <div className={styles.label}>Price ({item} item)</div>
                    <div className={`${styles.value} text-right`}>{formatPrice(mrp)}</div>
                </div>
                <div className={`${styles.item} ${styles["discount-item"]}`}>
                    <div className={styles.label}>Discount</div>
                    <div className={`${styles.value} text-right`}>{formatPrice(mrp - srp)}</div>
                </div>
            </div>
            <div className={`${styles.item} ${styles["total-payable"]}`}>
                <div className={styles.label}>Total Payable</div>
                <div className={`${styles.value} text-right`}>{formatPrice(srp)}</div>
            </div>
        </div>
    )
}

export default CartSummary;