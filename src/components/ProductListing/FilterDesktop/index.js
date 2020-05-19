import React from 'react';
import InputRange from 'react-input-range';
import './filter-desktop.scss';
import 'react-input-range/lib/css/index.css';


class FilterDesktop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: { min: 0, max: 100000 },
        };

        this.handleApply = this.handleApply.bind(this);
    }
    handleApply () {
        this.props.filterByRange(this.state.value);
        this.setState({ showModal: false });
    }
    render(){
        return (
            <div className="filter">
                <div className="title" onClick={this.handleOpenModal}><span className="icon icon-filter"></span> Filters</div>
                
                <InputRange
                    maxValue={100000}
                    minValue={0}
                    value={this.state.value}
                    onChange={value => this.setState({ value })} />

                <div className="label text-center">Price</div>
                
                <div className="text-center">
                    <button className="btn btn-blue" onClick={this.handleApply}>Apply</button>
                </div>
                
            </div>
        )
    }
}
export default FilterDesktop;