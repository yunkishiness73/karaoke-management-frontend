import React, { Component } from 'react';
import * as actions from '../../../actions/item';
import { connect } from 'react-redux';

class TBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {}
        }
    }
    

    handleInputChange = e => {
        let target = e.target;
        let value = target.value;
        let key = target.name

        this.setState({
            item: {
                ...this.state.item,
                [key]: value
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.item);
        alert('button clicked');
    }

    render() {
        return (
            <tbody>
                <tr>
                    <td colspan="2" className=""><input name="name" onChange={(e) => this.handleInputChange(e)} type="text" className="tenmonan form-control" placeholder="Tên sản phẩm *" /></td>
                    <td><input name="unit" onChange={(e) => this.handleInputChange(e)} type="text" className="form-control" placeholder="Đơn vị tính *" /></td>
                    <td><input name="price" onChange={(e) => this.handleInputChange(e)} type="text" className="giatien form-control" placeholder="Giá tiền sản phẩm *" /></td>
                    <td><a onClick={(e) => this.handleSubmit(e)} href="/" className="btn btn-success btn-addDish" style={{ display: 'inline-block', height: '34px' }}><i className="fa fa-plus"></i></a></td>
                </tr>
            </tbody>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
       itemData: state.item
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchItemList: () =>  dispatch(actions.fetchItemList()),
        saveItem: (item) => dispatch(actions.saveItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TBody);