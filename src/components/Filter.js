import React, { Component } from 'react';
import Canvas from './Canvas';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            filterType: 0,
            dateRange: [moment(new Date()), moment(new Date())]
        }
    }

    setStartDate = date => {
        let dateRange = this.state.dateRange;
        dateRange[0] = moment(date);
        this.setState({ startDate: date, dateRange });
    }

    setEndDate = date => {
        let dateRange = this.state.dateRange;
        dateRange[1] = moment(date);
        this.setState({ endDate: date, dateRange });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log("from " +this.state.dateRange[0].format("YYYY-MM-DD"));
        console.log("to " +this.state.dateRange[1].format("YYYY-MM-DD"));
    }

    handleFilterChange = e => {
        let dateRange;
        let target = e.target;
        let name = target.name;
        let value = parseInt(target.value);

        // console.log(name);
        // console.log(value);

        switch (value) {
            case 0:
                dateRange = [moment(), moment()];
                break;
            case 1:
                dateRange = [moment().subtract(1, 'days'), moment().subtract(1, 'days')];
                break;
            case 2:
                let currDay = moment().day();
                let currDate = moment().date();
                let startDateOfWeek = currDay === 0 ? currDate - 6 : currDate - currDay + 1;
                // console.log('----');
                // console.log(moment().set('date', startDateOfWeek));
                // console.log('----');
                dateRange = [moment().set('date', startDateOfWeek), moment()];
                break;
            case 3:
                dateRange = [moment().set('date', 1), moment()];
                break;
            default:
                dateRange = [moment(this.state.startDate), moment(this.state.endDate)];
                break;
        }

        this.setState({ [name]: value, dateRange });
    }

    render() {
        // console.log("startDate: " + moment(this.state.startDate).format("YYYY-MM-DD"));
        // console.log("endDate: " + this.state.endDate);
        return (
            <div className="container-fluid mt-2 pt-2 right_col">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="jumbotron" style={{ width: '60%', margin: '15px auto', height: '130px' }}>
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
                            <div className="col-sm-2">
                                <button onClick={(e) => this.onSubmit(e)} className="btn btn-success btn-submit">Xem Báo Cáo</button>
                            </div>
                        </div>
                        <hr className="m-y-md" />
                    </div>
                    <div className="row">
                        <div className>
                            <div style={{ width: '49%', border: '1px solid #0c020245', float: 'left', marginRight: '1%' }}>
                                <Canvas />
                                <div style={{ width: '100%', textAlign: 'center', background: 'white', padding: '5px' }}>
                                    <div className="btn-group" role="group" style={{ textAlign: 'center', margin: '0 auto' }}>
                                        <button type="button" className="btn btn-secondary" style={{ background: 'white' }}>Ngày</button>
                                        <button type="button" className="btn btn-secondary" style={{ background: 'white' }}>Tháng</button>
                                        <button type="button" className="btn btn-secondary" style={{ background: 'white' }}>Năm</button>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '49%', border: '1px solid #0c020245', float: 'left', marginLeft: '1%' }}>
                                <Canvas />
                                <div className="" style={{ width: '100%', textAlign: 'center', background: 'white', padding: '5px' }}>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-secondary" style={{ background: 'white' }}>Ngày</button>
                                        <button type="button" className="btn btn-secondary" style={{ background: 'white' }}>Tháng</button>
                                        <button type="button" className="btn btn-secondary" style={{ background: 'white' }}>Năm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Filter;