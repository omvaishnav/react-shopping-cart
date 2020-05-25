import React from 'react';
import Modal from 'react-modal';
import InputRange from 'react-input-range';
import styles from './filter.module.scss';
import 'react-input-range/lib/css/index.css';

Modal.setAppElement('#root');

const customStyle = {
    content: {
        top: "100px",
        bottom: "auto"
    }
}

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: { min: 0, max: 100000 },
            showModal: false,
        };

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
    handleApply () {
        this.props.filterByRange(this.state.value);
        this.setState({ showModal: false });
        this.props.updateToastMessage("Filter applied");
    }
    render(){
        return (
            <div className={styles.filter}>
                <div onClick={this.handleOpenModal}><span className="icon icon-filter"></span> Filters</div>
                <Modal 
                    isOpen={this.state.showModal}
                    style={customStyle}
                    contentLabel="Filter Options"
                >
                    <div className="modal-title">Filter Options</div>
                    <div className="modal-content">
                        <InputRange
                            maxValue={100000}
                            minValue={0}
                            value={this.state.value}
                            onChange={value => this.setState({ value })} />
                        <div className="text-center">Price</div>
                    </div>
                    <div className="modal-actions">
                        <button onClick={this.handleCloseModal}>Cancel</button>
                        <button onClick={this.handleApply}>Apply</button>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default Filter;