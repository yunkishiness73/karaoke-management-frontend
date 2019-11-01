import React, { Component } from 'react';

class RowItem extends Component {
    render() {
        return (
            <tr>
                <td colspan="2" style={{ width: '30%' }}><span className="hidden-tg">{this.props.value.name}</span></td>
                <td style={{ width: '20%' }}><span className="hidden-tg ">{this.props.value.unit}</span></td>
                <td style={{ width: '20%' }}> <span className="hidden-tg ">{this.props.value.price}</span></td>
                <td style={{ width: '20%' }}>
                    <a data-href="" className="btn btn-warning btn-edit" style={{ display: 'inline-block', height: '34px'}}><i
                        className="fa fa-pencil"></i></a>
                    <a data-href="" className="btn btn-danger btn-remove" style={{ display: 'inline-block', height: '34px'}}><i
                        className="fa fa-remove"></i></a>
                    <a data-href="" className="btn btn-success btn-save" style={{ display: 'none' }}><i
                        className="fa fa-floppy-o"></i></a>
                </td>
            </tr>
        );
    }
}

export default RowItem;