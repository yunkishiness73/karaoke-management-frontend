import React, { Component } from 'react';
import THead from './THead';
import TBody from './TBody';
import style from './style.css';
import Title from '../Title/Title';
import Search from '../Search/Search';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import * as actions from '../../actions/invoice';
import { connect } from 'react-redux';

class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datepicker: null,
        }
    }

    setSelectedDate = (date) => {
        let datepicker = moment(date).format("YYYY-MM-DD");
        
        this.setState({ datepicker: date });

        this.props.getDatePicker(datepicker);
        this.props.fetchInvoiceList();
    }
    
    render() {
        console.log(this.props.match);
        return (
            <div className="card-deck right_col">
                <div className="row">
                    <div className="table-responsive col-sm-12">
                        <div className="row">
                            <Title colspan="col-sm-1" title="Invoices" />
                            <Search type="INVOICE" />
                            <div className="col-sm-3" style={{ fontSize: '17px', padding: '3px', textAlign: 'right', height: '40px' }}>Lọc theo
          thời gian</div>
                            <div className="col-sm-2">
                                <DatePicker 
                                    className="form-control datepicker"
                                    selected={this.state.datepicker}
                                    inputProps={{ readOnly: true }}
                                    dateFormat="yyyy-MM-dd"
                                    onChange={date => this.setSelectedDate(date)}
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="row" style={{ textAlign: 'center ' }}>
                            <table className="table" style={{ margin: '2% auto', width: '70%' }}>
                                <THead />
                                <TBody />
                            </table>
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