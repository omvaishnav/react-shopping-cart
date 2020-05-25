import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Sort from './Sort';
import SortDesktop from './SortDesktop';
import Filter from './Filter';
import FilterDesktop from './FilterDesktop';
import Product from '../Product';
import Media from 'react-media';
import { pushProductsToStore, updateToastMessage } from '../../Redux/Actions/productsAction';
import styles from './productlisting.module.scss';

import initialData from '../../staticData/data.json';

class ProductListing extends React.Component {
    constructor(){
        super();
        this.state = {
            products: initialData.items
        }
        this.data = initialData.items;

        this.sortBy = this.sortBy.bind(this);
        this.filterByRange = this.filterByRange.bind(this);
    }
    componentDidMount(){
        let dataObj = {
            data: initialData.items,
            dataType: "initial"
        }
        this.props.pushProductsToStore(dataObj);
    }
    componentDidUpdate(prevProps){
        if(prevProps.dataType !== this.props.dataType){
            this.forceUpdate();
        }
    }
    sortBy(option){
        let sortedProducts;
        sortedProducts = this.props.products.sort((a,b)=>{
            if (option === "pricelow") {
                return parseInt(a.price.actual)  - parseInt(b.price.actual);
            } else if (option === "pricehigh") {
                return parseInt(b.price.actual)  - parseInt(a.price.actual);
            } else if (option === "discount") {
                return parseInt(b.discount)  - parseInt(a.discount);
            }
            return false;
        })

        let dataObj = {
            data: sortedProducts,
            dataType: option
        }
        this.props.pushProductsToStore(dataObj);
    }
    filterByRange(range){
        const filterdData = this.data.filter(item => item.price.actual > range.min && item.price.actual < range.max);
        let dataObj = {
            data: filterdData,
            dataType: range.min + range.max
        }
        this.props.pushProductsToStore(dataObj);
    }
    render(){
        return (
            <React.Fragment>
               
                <div id="productListing" className={styles["product-listing"]}>
                    <Media query={{ minWidth: 768 }}>
                        {matches =>
                           matches && (
                            <div className={styles.sidebar}>
                                <FilterDesktop filterByRange={this.filterByRange} updateToastMessage={this.props.updateToastMessage} />
                            </div>
                           )
                        }
                    </Media>
                    <div className={styles["listing-inner"]}>
                        <Media query={{ maxWidth: 768 }}>
                            {matches =>
                                matches ? (
                                    <div className={styles.actions}>
                                        <Sort sortBy={this.sortBy} updateToastMessage={this.props.updateToastMessage} />
                                        <Filter filterByRange={this.filterByRange} updateToastMessage={this.props.updateToastMessage} />
                                    </div>
                                ) : (
                                    <SortDesktop sortBy={this.sortBy} updateToastMessage={this.props.updateToastMessage} />
                                )
                            }
                        </Media>
                        
                        <div className={styles.content}>
                            {this.props.products.map((item,i) => {
                                return <Product key={i} item={item} />
                            })}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        products: store.products.products,
        dataType: store.products.dataType
    }
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        pushProductsToStore,
        updateToastMessage,
    },dispatch)
}
export default connect(mapStateToProps,mapActionsToProps)(ProductListing);