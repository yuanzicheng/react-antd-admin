import React from "react";
import {connect} from 'react-redux';
import {get_init_data, init_data, add_item, delete_item} from '../store/action-creator.js';

class Page1 extends React.Component {

    componentDidMount() {
        this.props.getInitData();
    }

    render() {
        console.log('data1:', this.props.data1);
        console.log('data2:', this.props.data2);
        return (
            <div>page1</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data1: state.data1,
        data2: state.data2
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getInitData() {
            const action = get_init_data();
            dispatch(action)
        },
        initItem(data) {
            const action = init_data(data);
            dispatch(action)
        },
        addItem() {
            const action = add_item();
            dispatch(action)
        },
        deleteItem(index) {
            const action = delete_item(index);
            dispatch(action)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1)