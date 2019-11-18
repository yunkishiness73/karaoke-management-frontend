import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import * as actions from '../../../actions/room';

class Filter extends Component {

    handleChange = (e) => {
        let target = e.target;
        let criteria = target.value;

        this.props.filterByRoomType(criteria);
    }

    render() {
        return (
            <div className="col-sm-2">
                <select onChange={(e) => this.handleChange(e)} defaultValue={'/'} className="form-control filter">
                    <option value={'/'}>Tất Cả</option>
                    <option value={'roomTypeId=1'}>Phòng Thường</option>
                    <option value={'roomTypeId=2'}>Phòng Lớn</option>
                    <option value={'roomTypeId=3'}>Phòng VIP</option>
                    <option value={'isBooking=1'}>Phòng đã đặt</option>
                    <option value={'isBooking=0'}>Phòng còn trống</option>
                </select>
            </div>

        );
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        filterByRoomType: (criteria) => {
            dispatch(actions.filterRoomType(criteria))
        }
    }
}

export default connect(null, mapDispatchToProps)(Filter)
