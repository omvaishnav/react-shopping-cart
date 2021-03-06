import React from 'react';
import styles from './sort-desktop.module.scss';

class SortDesktop extends React.Component {
    constructor () {
      super();
      this.state = {
        selectedOption : ''
      };

      this.options = [
        {
            key: 'PRICE_HIGH',
            value: 'pricehigh',
            displayName: 'Price -- High To Low'
        },
        {
            key: 'PRICE_LOW',
            value: 'pricelow',
            displayName: 'Price -- Low To High'
        },
        {
            key: 'DISCOUNT',
            value: 'discount',
            displayName: 'Discount'
        }
    ]
      
    }
    
    handleOptionClick(option){
        this.props.sortBy(option);
        
        this.setState({
            selectedOption : option
        })
    }
    
    render() {
        const SortOptions = () => {
            return (
                <div className={styles["sort-options"]}>
                    {this.options.map(option => 
                        <div className={styles.option} key={option.key}>
                            <span 
                                onClick={this.handleOptionClick.bind(this, option.value)} 
                                className={`${(this.state.selectedOption === option.value ) ? 'selected' : ''}`}>{option.displayName}</span>
                        </div>
                    )}
                </div>
            )
        }
        return (
            <div className={styles.sort}>
                <strong className={styles.title} onClick={this.handleOpenModal}>Sort By</strong>
                <SortOptions />
            </div>
        )
    }
}
export default SortDesktop;