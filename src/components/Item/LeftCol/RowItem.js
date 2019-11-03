import React, { Component } from 'react';
import * as actions from '../../../actions/item';
import { connect } from 'react-redux';

class RowItem extends Component {

    handleRemove = (e) => {
        e.preventDefault();
        this.props.deleteItem(this.props.value.id);
    }

    handleEdit = e => {
        e.preventDefault();
        this.props.showItemForm();
        this.props.loadEditItem(this.props.value);
    }

    render() {
        return (
            <tr>
                <td colspan="2" style={{ width: '30%' }}><span className="hidden-tg">{this.props.value.name}</span></td>
                <td style={{ width: '20%' }}><span className="hidden-tg ">{this.props.value.unit}</span></td>
                <td style={{ width: '20%' }}> <span className="hidden-tg ">{this.props.value.price}</span></td>
                <td style={{ width: '20%' }}>
                    <a onClick={(e) => this.handleEdit(e)} href="/" className="btn btn-warning btn-edit" style={{ display: 'inline-block', height: '34px'}}><i
                        className="fa fa-pencil"></i></a>
                    <a onClick={(e) => { if (window.confirm('Are you sure you want to delete this item ?')) this.handleRemove(e) }} href="/" className="btn btn-danger btn-remove" style={{ display: 'inline-block', height: '34px'}}><i
                        className="fa fa-remove"></i></a>
                    <a href="/" className="btn btn-success btn-save" style={{ display: 'none' }}><i
                        className="fa fa-floppy-o"></i></a>
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteItem: (id) => dispatch(actions.deleteItem(id)),
        loadEditItem: (id) => dispatch(actions.loadEditItem(id)),
        showItemForm: () => dispatch(actions.showItemForm())
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RowItem);