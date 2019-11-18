import React, { Component } from 'react';
import THead from './THead';
import TBody from './TBody';
import './style.css';
import Title from '../Title/Title';
import Search from '../Search/Search';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import * as actions from '../../actions/invoice';
import { connect } from 'react-redux';
import InvoiceService from '../../services/InvoiceService';

class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datepicker: null,
        }
    }

    setSelectedDate = (date) => {
        let datepicker;

        if (date) {
            datepicker = moment(date).format("YYYY-MM-DD");

            this.setState({ datepicker: date });
        } else {
            datepicker = '';
        }

        this.props.getDatePicker(datepicker);
        this.props.fetchInvoiceList();
    }

    componentWillMount() {
        const token = localStorage.getItem('token');

        if (token)
            InvoiceService.setHeader('Authorization', `Bearer ` + JSON.parse(token));
    }

    render() {
        console.log(this.props.match);
        return (
            <div className="card-deck right_col">
                <div className="row">
                    <div className="table-responsive col-sm-12" style={{ minHeight: '300px' }}>
                        <div className="row">
                            <Title colspan="col-sm-1" title="Invoices" />
                            <Search type="INVOICE" placeholder="Nhập tên phòng, tổng tiền, từ khóa..." />
                            <div className="col-sm-3" style={{ fontSize: '17px', padding: '3px', textAlign: 'right', height: '40px' }}>Lọc theo
          thời gian</div>
                            <div className="col-sm-2">
                                <DatePicker
                                    className="form-control datepicker"
                                    selected={this.state.datepicker}
                                    dateFormat="yyyy-MM-dd"
                                    onChange={date => this.setSelectedDate(date)}
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="row panel panel-primary" style={{ width: '80%', margin: '2% auto' }}>
                            <div className="panel-heading" style={{ fontSize: '18px', background: '#2a3f54' }}>Invoices List</div>
                            <div className="panel-body">
                                <table className="table table-bordered table-hover table-striped" style={{ fontSize: '15px' }}>
                                    <THead />
                                    <TBody />
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDatePicker: datepicker => dispatch(actions.getDatePicker(datepicker)),
        fetchInvoiceList: () => dispatch(actions.fetchInvoiceList())
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        keyword: state.invoice.keyword
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);