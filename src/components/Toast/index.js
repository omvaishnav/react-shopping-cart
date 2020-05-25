import React from  'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from './toast.module.scss';
import { updateToastMessage } from '../../Redux/Actions/productsAction';

class Toast extends React.Component {
    constructor(){
        super();
        this.state = {
            activeClass: ""
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.toastMessage !== this.props.toastMessage){
            this.setState({
                activeClass: "active"
            })
            setTimeout(() => {
                this.setState({
                    activeClass: ""
                })
                this.props.updateToastMessage("")
            },2000)
        }
    }
    render(){
        return (
            this.props.toastMessage ? (
                <div className={`${styles["toast-message"]} ${this.props.position} ${this.state.activeClass}`}>
                    {this.props.toastMessage}
                </div>
            ) : null
        )
    }
}

const mapStateToProps = (store) => {
    return {
        toastMessage: store.products.toastMessage
    }
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        updateToastMessage
    },dispatch)
}

export default connect(mapStateToProps,mapActionsToProps)(Toast);