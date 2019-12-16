import React, { Component } from 'react';
import * as actions from '../../../actions/item';
import * as invoiceActions from '../../../actions/invoice';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';

class RowItem extends Component {

    handleRemove = (e) => {
        e.preventDefault();
        this.props.deleteItem(this.props.value.id);
    }

    handleEdit = e => {
        e.preventDefault();
        this.props.showItemForm();
        this.props.loadEditItem(this.props.value);
    }

    handleOrder = () => {
        let item = this.props.value;
        let payload = { item: {} };
        
        if (item.id)
            payload.item['id'] = item.id;

        this.props.saveDetailInvoice(payload);
    }

    renderButton = () => {
        switch (this.props.type) {
            case 'PAYMENT':
                return (
                    <td style={{ width: '20%' }}>
                        <button onClick={() => this.handleOrder()} className="btn btn-success btn-save" style={{ display: 'inline-block', height: '34px' }}><i
                            className="fa fa-cart-plus"></i></button>
                    </td>
                );
            default:
                return (
                    <td style={{ width: '20%' }}>
                        <a onClick={(e) => this.handleEdit(e)} href="/" className="btn btn-warning btn-edit" style={{ display: 'inline-block', height: '34px' }}><i
                            className="fa fa-pencil"></i></a>
                        <Link onClick={(e) => { if (window.confirm('Are you sure you want to delete this item ?')) this.handleRemove(e) }} to="/items" className="btn btn-danger btn-remove" style={{ display: 'inline-block', height: '34px' }}><i
                            className="fa fa-remove"></i></Link>
                    </td>
                );

        }
    }

    render() {
        return (
            <tr>
                <td colspan="2" style={{ width: '30%' }}>{this.props.value.name}</td>
                <td style={{ width: '20%' }}>{this.props.value.unit}</td>
                <td style={{ width: '20%' }}><NumberFormat value={this.props.value.price} displayType={'text'} thousandSeparator={true} suffix={'₫'} /></td>
                {this.renderButton()}
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteItem: (id) => dispatch(actions.deleteItem(id)),
        loadEditItem: (id) => dispatch(actions.loadEditItem(id)),
        showItemForm: () => dispatch(actions.showItemForm()),
        saveDetailInvoice: (payload) => dispatch(invoiceActions.saveDetailInvoice(payload))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RowItem);