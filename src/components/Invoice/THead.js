import React, { Component } from 'react';

class THead extends Component {
    render() {
        return (
            <thead>
                <tr style={{ textAlign: 'center ' }}>
                    <th style={{ textDecoration: 'underline'}}>#</th>
                    <th>Ngày</th>
                    <th>Thu ngân</th>
                    <th>Hóa đơn</th>
                    <th>Phòng</th>
                    <th>Tổng tiền</th>
                </tr>
            </thead>
        );
    }
}

export default THead;