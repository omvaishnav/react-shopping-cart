import React from 'react';
import './search.scss';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: 0
        }
    }
    handleClick = () => {
        this.setState({status: 1})
    }
    render(){
        return (
            <div className={`search${this.state.status ? ' open' : ''}`}>
                <input type="text" className="search-item" placeholder="Search" />
                <span className="icon icon-search" onClick={this.handleClick}></span>
            </div>
        )
    }
}
export default Search;