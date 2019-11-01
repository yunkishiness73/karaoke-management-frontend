import React, { Component } from 'react';
import InvoiceItem from './InvoiceItem';

class TBody extends Component {
    render() {
        return (
            <tbody>
                <InvoiceItem />
                <InvoiceItem />
                <InvoiceItem />
                <InvoiceItem />
            </tbody>
        );
    }
}

export default TBody;