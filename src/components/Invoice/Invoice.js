import React, { Component } from 'react';
import THead from './THead';
import TBody from './TBody';
import style from './style.css';
import Title from '../Title/Title';
import Search from '../Search/Search';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

class Invoice extends Component {
    render() {
        return (
            <div className="card-deck right_col">
                <div class="row">
                    <div className="table-responsive col-sm-12">
                        <div class="row">
                            <Title title="Invoices" />
                            <Search />
                            <div className="col-sm-3" style={{ fontSize: '17px', padding: '3px', textAlign: 'right', height: '40px' }}>Lọc theo
          thời gian</div>
                            <div className="col-sm-2">
                                <DatePicker className="form-control datepicker"/>
                            </div>
                        </div>
                        <hr />
                        <div class="row" style={{ textAlign: 'center ' }}>
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

export default Invoice;