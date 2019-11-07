import React, { Component } from 'react';
import moment from 'moment';
import { Redirect, Link } from 'react-router-dom';
import * as AppConstant from '../../constants/constants';

class InvoiceItem extends Component {
    openInNewTab = url => {
        window.open(url, "_blank");
    }

    render() {
        return (
            <tr>
                <td>{ this.props.pos + 1 }</td>
                <td>{ moment(this.props.value.checkOut).format("DD/MM/YY hh:mm ") }</td>
                <td>{ this.props.value.user.firstName + ' ' + this.props.value.user.lastName }</td>
                <td><a style={{ cursor: 'pointer', color: '#1877F2', textDecoration: 'underline' }} onClick={() => this.openInNewTab(AppConstant.BILL_URL + this.props.value.invoicePdf)}>#{ this.props.value.id }</a></td>
                <td>{ this.props.value.room.name }</td>
                <td>{ this.props.value.totalPrice } VNĐ</td>
            </tr>
        );
    }
}

export default InvoiceItem;