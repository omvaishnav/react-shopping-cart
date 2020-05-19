import React from 'react';
import Sort from './Sort';
import SortDesktop from './SortDesktop';
import Filter from './Filter';
import FilterDesktop from './FilterDesktop';
import Product from '../Product';
import Media from 'react-media';
import './productlisting.scss';

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
    sortBy(option){
        let sortedProducts;
        sortedProducts = this.state.products.sort((a,b)=>{
            if (option === "pricelow") {
                return parseInt(a.price.actual)  - parseInt(b.price.actual);
            } else if (option === "pricehigh") {
                return parseInt(b.price.actual)  - parseInt(a.price.actual);
            } else if (option === "discount") {
                return parseInt(b.discount)  - parseInt(a.discount);
            }
            return false;
        })

        this.setState({
            products: sortedProducts
        })
    }
    filterByRange(range){
        const filterdData = this.data.filter(item => item.price.actual > range.min && item.price.actual < range.max);
        this.setState({ products: filterdData })
    }
    render(){
        return (
            <React.Fragment>
               
                <div id="productListing" className={`product-listing`}>
                    <Media query={{ minWidth: 768 }}>
                        {matches =>
                           matches && (
                            <div className="sidebar">
                                <FilterDesktop filterByRange={this.filterByRange} />
                            </div>
                           )
                        }
                    </Media>
                    <div className="listing-inner">
                        <Media query={{ maxWidth: 768 }}>
                            {matches =>
                                matches ? (
                                    <div className="actions">
                                        <Sort sortBy={this.sortBy} />
                                        <Filter filterByRange={this.filterByRange} />
                                    </div>
                                ) : (
                                    <SortDesktop sortBy={this.sortBy} />
                                )
                            }
                        </Media>
                        
                        <div className="content">
                            {this.state.products.map((item,i) => {
                                return <Product key={i} item={item} />
                            })}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ProductListing;