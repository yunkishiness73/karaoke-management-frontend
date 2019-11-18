import React, { Component } from 'react';
import moment from 'moment';
import * as AppConstant from '../../constants/constants';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

class InvoiceItem extends Component {
    openInNewTab = url => {
        window.open(url, "_blank");
    }

    render() {
        return (
            <tr>
                <td>{ this.props.pos + 1 }</td>
                <td>{ moment(this.props.value.checkOut).format("DD/MM/YYYY hh:mm ") }</td>
                <td>{ this.props.value.user.firstName + ' ' + this.props.value.user.lastName }</td>
                <td><Link to="/invoices" style={{ cursor: 'pointer', color: '#1877F2', textDecoration: 'underline' }} onClick={() => this.openInNewTab(AppConstant.BILL_URL + this.props.value.invoicePdf)}>#{ this.props.value.id }</Link></td>
                <td>{ this.props.value.room.name }</td>
                <NumberFormat value={this.props.value.totalPrice} displayType={'text'} thousandSeparator={true} suffix={'₫'} renderText={value => <td>{value}</td>} />
            </tr>
        );
    }
}

export default InvoiceItem;