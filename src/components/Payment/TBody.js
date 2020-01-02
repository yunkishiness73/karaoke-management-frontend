import React, { Component } from 'react';
import OrderItem from './OrderItem';
import _ from 'lodash';

class TBody extends Component {

    renderOrderItem = () => {
        if (!this.props.invoiceItem) return null;

        const orderedList =  this.props.invoiceItem.detailInvoices;

        if (orderedList && orderedList.length > 0) {
            const orderedListSorted = orderedList.sort(function(a,b){
                return new Date(a.createdDate) - new Date(b.createdDate);
              });

            return _.map(orderedListSorted, (order) => {
                return ( 
                    <OrderItem
                        id={order.id}
                        key={order.id} 
                        name={order.item.name} 
                        unit={order.item.unit} 
                        price={order.item.price} 
                        quantity={order.quantity}
                        totalPrice={order.price}
                        value={order}
                    /> 
                );
            })
        }
    }

    render() {
        return (
            <tbody>
                {this.renderOrderItem()}
            </tbody>
        );
    }
}

export default TBody;