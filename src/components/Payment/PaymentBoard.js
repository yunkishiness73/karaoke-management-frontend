import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Title from '../Title/Title';
import moment from 'moment';
import * as actions from '../../actions/room';
import * as invoiceActions from '../../actions/invoice';
import { connect } from 'react-redux';

class PaymentBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheckOut: false
        }
    }


    calServiceCharge = () => {
        if (!this.props.invoiceItem) return 0;

        const orderedList = this.props.invoiceItem.detailInvoices;

        const serviceCharge = orderedList.reduce((totalPrice, currentVal) => {
            return totalPrice + currentVal.price;
        }, 0);

        return serviceCharge;
    }

    checkOut = e => {
        e.preventDefault();

        this.setState({ isCheckOut: true });

        if (this.props.invoiceItem) {
            let { room } = this.props.invoiceItem;
            
            if (room && room.id)
                this.props.checkOut(room.id);
        }
    }

    issueAnInvoice = (e) => {
        e.preventDefault();

        if (this.props.invoiceItem && this.props.charge) {
            const invoiceId = this.props.invoiceItem.id;
            this.props.issueAnInvoice(invoiceId);
        } 
    }

    renderIssueInvoiceBtn = () => {
        if (this.state.isCheckOut)
            return (
                <div className="col-sm-6">
                    <button onClick={(e) => this.issueAnInvoice(e)} className="check btn btn-success" style={{ width: '100%', display: 'inline-block' }}>In Hóa Đơn</button>
                </div>
            );
    }

    calRoomFee = () => {
        if (!this.props.invoiceItem) return 0;

        const serviceCharge = parseInt(this.calServiceCharge());
        const totalPrice = parseInt(this.props.invoiceItem.totalPrice);
        const surCharge = parseInt(this.props.invoiceItem.surcharge);
        const roomFee = totalPrice - surCharge - serviceCharge;

        return roomFee;
    }

    render() {
        return (
            <div className="col-sm-5" style={{ marginBottom: '150px', boder: '1px solid #ddd' }}>
                <div class="row">
                    <Title colspan="col-sm-2" title="Payment" />
                </div>
                <hr />
                <form>
                    <Fieldset name="roomName" disabled="true" value={this.props.invoiceItem ? this.props.invoiceItem.room['name'] : ''} label="Tên Phòng" />
                    <Fieldset name="roomType" disabled="true" value={this.props.invoiceItem ? this.props.invoiceItem.room.roomType['type'] : ''} label="Loại Phòng" />
                    <Fieldset disabled="true" value={this.props.invoiceItem ? moment(this.props.invoiceItem['checkIn']).format('DD/MM/YYYY hh:mm') : ''} label="Giờ Đặt" />
                    <Fieldset name="serviceCharge" type="currency" disabled="true" value={this.calServiceCharge()} label="Tiền Dịch Vụ" />
                    <Fieldset value={this.calRoomFee()} name="roomFee" disabled="true" type="currency" label="Tiền Giờ" />
                    <Fieldset value={this.props.invoiceItem ? this.props.invoiceItem.surcharge : 0} name="surCharge" type="currency" label="Phụ Thu" />
                    <Fieldset type="currency" value={this.props.invoiceItem ? this.props.invoiceItem['totalPrice'] : 0} name="totalPrice" disabled="true" label="Tổng Tiền" />
                    <Fieldset totalPrice={this.props.invoiceItem ? this.props.invoiceItem['totalPrice'] : 0} name="charge" type="currency" label="Tiền Khách Đưa" />
                    <fieldset>
                        <div className="row" style={{ textAlign: 'center' }}>
                            <div className="col-sm-6">
                                <button onClick={(e) => this.checkOut(e)} className="btn btn-danger" style={{ display: 'inline-block', width: '100%' }}>Thanh Toán</button>
                            </div>
                            { this.renderIssueInvoiceBtn() }
                        </div>
                    </fieldset>

                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        charge: state.invoice.charge
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        checkOut: (id) => dispatch(actions.checkOut(id)),
        issueAnInvoice: (invoiceId) => dispatch(invoiceActions.issueAnInvoice(invoiceId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentBoard);