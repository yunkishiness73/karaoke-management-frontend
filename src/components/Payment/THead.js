import React, { Component } from 'react';

class THead extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Sản phẩm</th>
                    <th>Đơn vị tính</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Thành Tiền</th>
                    <th></th>
                </tr>
            </thead>
        );
    }
}

export default THead;