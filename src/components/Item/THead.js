import React, { Component } from 'react';

class THead extends Component {
    render() {
        return (
            <thead>
                <tr><th colspan="2">Sản phẩm</th>
                    <th>Đơn vị tính</th>
                    <th>Giá</th> 
                    <th></th>
                </tr>
            </thead>
        );
    }
}

export default THead;