import React, { Component } from 'react';
import * as actions from '../../actions/invoice';
import { connect } from 'react-redux';
import DetailInvoiceService from '../../services/DetailInvoiceService';
import NumberFormat from 'react-number-format';

class OrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.quantity
        }
    }
    
    componentWillMount() {
        const token = localStorage.getItem('token');

        if (token) 
            DetailInvoiceService.setHeader('Authorization', `Bearer ` + JSON.parse(token));
    }
    
    
    handleRemove = () => {
        if (this.props.id) {
            this.props.deleteDetailInvoice(this.props.id);
        }
    }

    handleQuantityChange = (type) => {
        let { quantity } = this.state;
        let detailInvoice = {};

        switch (type) {
            case 'INCREASE':
                quantity++;
                this.setState({ quantity });
                break;
            case 'DESCREASE':
                quantity--;
                if (quantity < 1) quantity = 1;
                this.setState({ quantity });
                break;
        }

        detailInvoice['id'] = this.props.id;
        detailInvoice['quantity'] = parseInt(quantity);

        this.props.saveDetailInvoice(detailInvoice);
    }

    handleInputChange = e => {
        let value = e.target.value;
        let detailInvoice = {};

        value = value < 1 ? 1 : value;

        this.setState({ quantity: value });

        detailInvoice['id'] = this.props.id;
        detailInvoice['quantity'] = parseInt(value);

        this.props.saveDetailInvoice(detailInvoice);
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.unit}</td>
                <td>
                    <div className="input-group" style={{ display: 'inline-block', width: '8em' }}>
                        <div className="input-group-prepend" style={{ width: '2.3em', display: 'inline-block', float: 'left' }}>
                            <button onClick={() => this.handleQuantityChange('DESCREASE')} className="btn" type="button"><i class="fa fa-minus"></i></button>
                        </div>
                        <div style={{ width: '3em', display: 'inline-block', float: 'left' }}>
                            <input name="quantity" onChange={(e) => this.handleInputChange(e)} value={this.state.quantity ? this.state.quantity : this.props.quantity} type="text" className="form-control" />
                        </div>
                        <div className="input-group-append" style={{ width: '2.3em', display: 'inline-block', float: 'left' }}>
                            <button onClick={() => this.handleQuantityChange('INCREASE')} className="btn" type="button"><i class="fa fa-plus"></i></button>
                        </div>
                    </div>
                </td>
                <td><NumberFormat value={this.props.price} displayType={'text'} thousandSeparator={true} suffix={'₫'} /></td>
                <td style={{ width: '20%' }}><NumberFormat value={this.props.totalPrice} displayType={'text'} thousandSeparator={true} suffix={'₫'} /></td>
                <td><div onClick={() => this.handleRemove()} style={{ display: 'inline-block', height: '100%', fontSize: '16px', color: '#e74c3c', cursor: 'pointer' }}><i className="fa fa-trash-o"></i></div></td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        saveDetailInvoice: (detailInvoice) => dispatch(actions.saveDetailInvoice(detailInvoice)),
        deleteDetailInvoice: (id) => dispatch(actions.deleteDetailInvoice(id))
    }
}

export default connect(null, mapDispatchToProps)(OrderItem);