import React from 'react';
import Modal from 'react-modal';
import './sort.scss';

Modal.setAppElement('#root');

const customStyle = {
    content: {
        top: "100px",
        bottom: "auto"
    }
}

class Sort extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false,
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
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.handleApply = this.handleApply.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    handleOptionClick(option, e){
        e.preventDefault();
        
        this.setState({
            selectedOption : option
        })
    }
    handleApply(){
        const sortedOption = this.options.filter(option => option.value === this.state.selectedOption);
        this.props.sortBy(sortedOption[0].value);
        this.setState({ showModal: false });
    }
    render() {
        const SortOptions = () => {
            return (
                <div className="sort-options">
                    {this.options.map(option => 
                        <div className="option" key={option.key}>
                            <span 
                                onClick={this.handleOptionClick.bind(this, option.value)} 
                                className={`${(this.state.selectedOption === option.value ) ? 'selected' : ''}`}>{option.displayName}</span>
                        </div>
                    )}
                </div>
            )
        }
        return (
            <div className="sort">
                <div onClick={this.handleOpenModal}><span className="icon icon-sort"></span> Sort</div>
                <Modal 
                    isOpen={this.state.showModal}
                    style={customStyle}
                    contentLabel="Sort Options"
                >
                    <div className="modal-title">Sort Options</div>
                    <div className="modal-content"><SortOptions /></div>
                    <div className="modal-actions">
                        <button onClick={this.handleCloseModal}>Cancel</button>
                        <button onClick={this.handleApply}>Apply</button>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default Sort;