import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Title from '../Title/Title';
import moment from 'moment';

class PaymentBoard extends Component {

    calServiceCharge = () => {
        if (!this.props.invoiceItem) return 0;

        const orderedList =  this.props.invoiceItem.detailInvoices;

        const serviceCharge = orderedList.reduce((totalPrice, currentVal) => {
            return totalPrice + currentVal.price;
        }, 0);
        
        return serviceCharge;
    }

    render() {
        console.log('render paymentboard');
        console.log(this.props.invoiceItem);
        console.log(this.calServiceCharge());
        return (
            <div className="col-sm-5" style={{ marginBottom: '150px', boder: '1px solid #ddd' }}>
                <div class="row">
                    <Title colspan="col-sm-2" title="Payment" />
                </div>
                <hr />
                <form>
                    <Fieldset disabled="true" value={this.props.invoiceItem ? this.props.invoiceItem.room['name'] : ''} label="Tên Phòng" />
                    <Fieldset disabled="true" value={this.props.invoiceItem ? this.props.invoiceItem.room.roomType['type'] : ''} label="Loại Phòng" />
                    <Fieldset disabled="true"value={this.props.invoiceItem ? moment(this.props.invoiceItem['checkIn']).format('DD/MM/YYYY hh:mm') : ''} label="Giờ Đặt" />
                    <Fieldset type="currency" disabled="true" value={this.calServiceCharge()} label="Tiền Dịch Vụ" />
                    <Fieldset disabled="true" type="currency" label="Tiền Giờ" />
                    <Fieldset label="Phụ Thu" />
                    <Fieldset disabled="true"label="Tổng Tiền" />
                    <Fieldset label="Tiền Khách Đưa" />
                    <fieldset>
                        <div className="row" style={{ textAlign: 'center' }}>
                            <div className="col-sm-6">
                                <button className="check btn btn-success" style={{ width: '100%', display: 'inline-block' }}>In Hóa Đơn</button>
                            </div>
                            <div className="col-sm-6">
                                <button className="btn btn-danger" style={{ display: 'inline-block', width: '100%' }}>Thanh Toán</button>
                            </div>
                        </div>
                    </fieldset>

                </form>
            </div>
        );
    }
}

export default PaymentBoard;