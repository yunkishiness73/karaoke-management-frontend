import React, { Component } from 'react';
import Canvas from './Canvas';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { connect } from 'react-redux';
import * as actions from '../actions/invoice';
import _ from 'lodash';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            viewType: '',
            dateRange: [moment(new Date()), moment(new Date())],
            selectDateRange: false
        }
    }

    setStartDate = date => {
        let dateRange = this.state.dateRange;

        if (date) {
            dateRange[0] = moment(date);
            this.setState({ startDate: date, dateRange });
        } else {
            dateRange[0] = '';
        }
    }

    setEndDate = date => {
        let dateRange = this.state.dateRange;

        if (date) {
            dateRange[1] = moment(date);
            this.setState({ endDate: date, dateRange });
        } else {
            dateRange[1] = '';
        }
       
    }

    onSubmit(e, viewType) {
        e.preventDefault();

        let dateRange = [...this.state.dateRange];
        if (dateRange[0] && dateRange[1])
            dateRange = _.map(dateRange, (date) => date.format("YYYY-MM-DD"));

        const criteria = {
            dateRange: dateRange,
            viewType: viewType
        };

        this.props.getViewType(viewType ? viewType : 'day');
        this.props.fetchSummaryInvoiceList(criteria);
        // console.log('filter ' +this.state.filterType);
        // console.log("from " +this.state.dateRange[0].format("YYYY-MM-DD"));
        // console.log("to " +this.state.dateRange[1].format("YYYY-MM-DD"));
    }

    handleFilterChange = e => {
        let dateRange;
        let target = e.target;
        let name = target.name;
        let value = parseInt(target.value);
        let selectDateRange = false;

        switch (value) {
            case 0:
                dateRange = [moment(), moment()];
                this.props.getDateRange(dateRange);
                break;
            case 1:
                dateRange = [moment().subtract(1, 'days'), moment().subtract(1, 'days')];
                this.props.getDateRange(dateRange);
                break;
            case 2:
                let currDay = moment().day();
                let currDate = moment().date();
                let startDateOfWeek = currDay === 0 ? currDate - 6 : currDate - currDay + 1;
                // console.log('----');
                // console.log(moment().set('date', startDateOfWeek));
                // console.log('----');
                dateRange = [moment().set('date', startDateOfWeek), moment()];
                this.props.getDateRange(dateRange);
                break;
            case 3:
                dateRange = [moment().set('date', 1), moment()];
                this.props.getDateRange(dateRange);
                break;
            default:
                selectDateRange = true;
                dateRange = [moment(this.state.startDate), moment(this.state.endDate)];
                this.props.getDateRange(dateRange);
                break;
        }

        this.setState({ [name]: value, dateRange, startDate: dateRange[0]._d, endDate: dateRange[1]._d, selectDateRange });
    }


    renderDatePicker = () => {
        if (this.state.selectDateRange)
            return (
                <div style={{ display: 'block' }}>
                    <div className="col-sm-2">
                        <DatePicker
                            className="form-control"
                            selected={this.state.startDate}
                            dateFormat="yyyy-MM-dd"
                            inputProps={{ readOnly: true }}
                            onChange={date => this.setStartDate(date)}
                        />
                    </div>
                    <div className="col-sm-2">
                        <DatePicker
                            className="form-control"
                            selected={this.state.endDate}
                            startDate={this.state.startDate}
                            minDate={this.state.startDate}
                            dateFormat="yyyy-MM-dd"
                            inputProps={{ readOnly: true }}
                            onChange={date => this.setEndDate(date)}
                        />
                    </div>
                </div>
            );
    }

    render() {
        // console.log("startDate: " + moment(this.state.startDate).format("YYYY-MM-DD"));
        // console.log("endDate: " + this.state.endDate);
        // console.log(this.state);
        console.log('render filter');
        return (
            <div className="container-fluid mt-2 pt-2 right_col">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="jumbotron" style={{ width: '80%', margin: '15px auto', height: '130px' }}>
                            <div className="col-sm-3" style={{ fontSize: '17px', padding: '3px', textAlign: 'right' }}>Lọc theo
          thời gian</div>
                            <div className="col-sm-3">
                                <select onChange={e => this.handleFilterChange(e)} name="filterType" className="form-control">
                                    <option value={0}>Hôm nay</option>
                                    <option value={1}>Hôm qua</option>
                                    <option value={2}>Tuần này</option>
                                    <option value={3}>Tháng này</option>
                                    <option value={4}>Chọn khoảng thời gian</option>
                                </select>
                            </div>
                            {this.renderDatePicker()}
                            <div className="col-sm-2">
                                <button onClick={(e) => this.onSubmit(e)} className="btn btn-success btn-submit">Xem Báo Cáo</button>
                            </div>
                        </div>
                        <hr className="m-y-md" />
                    </div>
                    <div className="row">
                        <div style={{ width: '90%', border: '1px solid #0c020245', margin: '15px auto'}}>
                            <Canvas />
                            <div style={{ width: '100%', textAlign: 'center', background: 'white', padding: '5px' }}>
                                <div className="btn-group" role="group" style={{ textAlign: 'center', margin: '0 auto' }}>
                                    <button onClick={(e) => this.onSubmit(e, 'day')} type="button" className="btn btn-secondary" style={{ background: 'white' }}>Ngày</button>
                                    <button onClick={(e) => this.onSubmit(e, 'month')} type="button" className="btn btn-secondary" style={{ background: 'white' }}>Tháng</button>
                                    <button  onClick={(e) => this.onSubmit(e, 'year')} type="button" className="btn btn-secondary" style={{ background: 'white' }}>Năm</button>
                                </div>
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
        fetchSummaryInvoiceList: (criteria) => dispatch(actions.fetchSummaryInvoiceList(criteria)),
        getDateRange: (dateRange) => dispatch(actions.getDateRange(dateRange)),
        getViewType: (viewType) => dispatch(actions.getViewType(viewType))
    }
}

export default connect(null, mapDispatchToProps)(Filter);