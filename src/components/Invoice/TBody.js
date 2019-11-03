import React, { Component } from 'react';
import InvoiceItem from './InvoiceItem';
import * as actions from '../../actions/invoice';
import { connect } from 'react-redux';


class TBody extends Component {

    renderInvoiceItem = () => {
        let invoices = this.props.invoiceData.invoices;

        if (Array.isArray(invoices) && invoices.length > 0) {
            return invoices.map((invoice, value) => {
                return <InvoiceItem value={invoice} key={value} pos={value}/>
            })
        }
    }

    render() {
        return (
            <tbody>
                { this.renderInvoiceItem() }
            </tbody>
        );
    }

    componentDidMount() {
        this.props.fetchInvoiceList();
    }
    
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchInvoiceList: () => dispatch(actions.fetchInvoiceList())
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        invoiceData: state.invoice
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TBody);