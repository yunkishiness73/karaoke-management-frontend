import React, { Component } from 'react';
import Menu from '../Item/LeftCol/LeftCol';
import ItemService from '../../services/ItemService';
import RoomService from '../../services/RoomService';
import InvoiceService from '../../services/InvoiceService';
import DetailInvoiceService from '../../services/DetailInvoiceService';
import PaymentBoard from './PaymentBoard';
import OrderList from './OrderList';
import * as actions from '../../actions/invoice';
import { connect } from 'react-redux';


class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
    }
    

    componentWillMount() {
        const token = localStorage.getItem('token');

        if (token) {
            ItemService.setHeader('Authorization', `Bearer ` + JSON.parse(token));
            RoomService.setHeader('Authorization', `Bearer ` + JSON.parse(token));
            InvoiceService.setHeader('Authorization', `Bearer ` + JSON.parse(token));
            DetailInvoiceService.setHeader('Authorization', `Bearer ` + JSON.parse(token));

            const id = this.props.match.params.id;
            this.props.fetchInvoiceItem(id);
        }
    }

    renderMenu = () => {
        if (this.state.showMenu)
            return <Menu type='PAYMENT' />;
        console.log('render menu');
        console.log(this.props.invoiceItem);
        
        return <PaymentBoard invoiceItem={ this.props.invoiceItem }/>;
    }

    showMenuOrPaymentBoard = (type) => {
        switch (type) {
            case 'MENU': 
                this.setState({ showMenu: true });
                break;
            default:
                this.setState({ showMenu: false });
                break;
        }
    }

    render() {
        console.log(this.props.invoiceItem);
        return (
            <div className="container-fluid mt-2 pt-2 right_col">
                <div class="row">
                    <div class="col-sm-5" style={{ marginBottom: '10px' }}>
                        <div style={{ width: '49%', float: 'left', marginRight: '1%' }}>
                            <button onClick={() => this.showMenuOrPaymentBoard()} className="check btn btn-primary" style={{ width: '100%', height: '60px' }}>Thanh Toán</button>
                        </div>
                        <div style={{ width: '49%', float: 'left' }}>
                            <button onClick={() => this.showMenuOrPaymentBoard('MENU')} className="btn btn-primary" style={{ width: '100%', height: '60px' }}>Thực Đơn</button>
                        </div>
                    </div>
                </div>
                {/* Component Menu or PaymentBoard will be rendered here. */}
                { this.renderMenu() }
                {/* Component OrderList used for ordering items */}
                <OrderList invoiceItem={ this.props.invoiceItem } />
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        invoiceItem: state.invoice.invoiceItem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchInvoiceItem: (id) => dispatch(actions.fetchInvoiceItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);