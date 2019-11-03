import React, { Component } from 'react';
import moment from 'moment';

class InvoiceItem extends Component {
    render() {
        return (
            <tr>
                <td>{ this.props.pos + 1 }</td>
                <td>{ moment(this.props.value.checkOut).format("DD/MM/YY hh:mm ") }</td>
                <td>{ this.props.value.user.firstName + ' ' + this.props.value.user.lastName }</td>
                <td>#<a href={ this.props.value.invoicePdf }>{ this.props.value.id }</a></td>
                <td>{ this.props.value.room.name }</td>
                <td>{ this.props.value.totalPrice } VNĐ</td>
            </tr>
        );
    }
}

export default InvoiceItem;