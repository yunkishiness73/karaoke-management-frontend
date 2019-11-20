import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/room';
import { Link } from 'react-router-dom';

class RoomItem extends Component {

    book = (e) => {
        const id = this.props.id;
        
        if (id) 
            this.props.checkIn(id);
    }

    renderButton = () => {
        if (this.props.value.isBooking) 
            return <Link to={`payment/${this.props.id}`} className="btn btn-success">Chi tiết </Link>;
           
        return <button onClick={(e) => this.book(e)} className="btn btn-primary checkIn">Đặt Phòng</button>;
    }

    changeRoomStatus = () => {
        if (this.props.value.isBooking) return 'bg-danger';

        return 'bg-info';
    }

    render() {
        return (
            <div className={"card text-white mb-3 col-sm-2 " +this.changeRoomStatus()} style={{ width: '24%', marginBottom: '1%', marginRight: '1%', height: '18rem', textAlign: 'center', boxShadow: '1px 2px 4px rgba(0, 0, 0, .5)' }}>
                <div className="progress" style={{ height: '5px' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                </div>
                {/*  <div style=""><button class="btn btn-warning" style="height: 10px;">Hủy</button></div> */}
                <div className="card-body mb-3">
                    <h3>Phòng { this.props.name } </h3>
                    <p>
                        { this.props.value.roomType.type }
                    </p>
                </div>
                <div className="card-footer">
                    {
                        this.renderButton()
                    }
                    <div style={{ marginTop: '15px', width: '100%' }}>
                        <a className="btn" style={{ position: 'absolute', right: '4%' }}><i className="fa fa-pencil" /></a>
                        <a className="btn" style={{ position: 'absolute', right: '-3%' }}><i className="fa fa-remove" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        checkIn: (id) => dispatch(actions.checkIn(id))
    }
}

export default connect(null, mapDispatchToProps)(RoomItem);