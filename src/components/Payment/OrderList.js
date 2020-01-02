import React, { Component } from 'react';
import THead from './THead';
import TBody from './TBody';
import Title from '../Title/Title';

class OrderList extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <div class="row">
                    <Title colspan="col-sm-3" title="Orders List" />
                </div>
                <hr />
                <div className="table-responsive col-sm-12">
                    <div className="row col-sm-12" style={{ overflowY: 'scroll', maxHeight: '800px', fontSize: '15px' }}>
                        <table className="table" style={{ border: '1px solid #ddd'}}>
                            <THead />
                            <TBody invoiceItem={ this.props.invoiceItem } />
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderList;