import React, { Component } from 'react';

class InvoiceItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>09:30 SA</td>
                <td>Nguyễn Kiệt Nà</td>
                <td>#100000</td>
                <td>V001</td>
                <td>1.000.000 VNĐ</td>
                <td>
                    <a href="<?= base_url($val['chitiet']) ?>" className="btn btn-info">Xem chi tiết <i
                        className="fa fa-eye"></i></a>
                </td>
            </tr>
        );
    }
}

export default InvoiceItem;