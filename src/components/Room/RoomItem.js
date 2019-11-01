import React, { Component } from 'react';

class RoomItem extends Component {

    renderButton = () => {
        if (this.props.value.isBooking) 
            return <a href="#" className="btn btn-success">Chi tiết</a>;
           
        return <a href="#" className="btn btn-primary checkIn">Đặt Phòng</a>;
    }

    render() {
        return (
            <div className={"card bg-info text-white mb-3 col-sm-2"} style={{ width: '24%', marginBottom: '1%', marginRight: '1%', height: '18rem', textAlign: 'center', boxShadow: '1px 2px 4px rgba(0, 0, 0, .5)' }}>
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

export default RoomItem;