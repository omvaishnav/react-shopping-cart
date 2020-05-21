import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { pushProductsToStore } from '../../../Redux/Actions/productsAction';

import initialData from '../../../staticData/data.json';
import styles from './search.module.scss';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: false
        }
        this.products = initialData.items;
    }
    handleClick = () => {
        this.setState({status: !this.state.status})
    }
    handleOnChange = async (e) => {
        const searchValue = e.target.value;
        let searchedProducts = "";
        let dataObj = {
            dataType: searchValue
        }
        if(searchValue.length > 0 && this.products.length > 0) {
            searchedProducts = this.products.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            dataObj.data = searchedProducts;
            this.props.pushProductsToStore(dataObj);
        } else {
            dataObj.data = this.products;
            this.props.pushProductsToStore(dataObj);
        }
    }
    render(){
        return (
            <div className={`${styles.search} ${this.state.status ? ' open' : ''}`}>
                <input type="text" className={styles["search-item"]} placeholder="Search" onChange={this.handleOnChange} />
                <span className="icon icon-search" onClick={this.handleClick}></span>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
      products: store.products.products
    }
}
const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        pushProductsToStore
    },dispatch)
}

export default connect(mapStateToProps,mapActionsToProps)(Search);