import React, { Component } from 'react';
import THead from '../THead';
import TBody from './TBody';
import Search from '../../Search/Search';
import Title from '../../Title/Title';
import * as actions from '../../../actions/item';
import { connect } from 'react-redux';

class LeftCol extends Component {
    handleClick = () => {
        this.props.showItemForm();
    }

    renderAddButton = () => {
        if (this.props.isAddItemButtonShow && !this.props.type) {
            return (
                <div className="col-sm-3" style={{height: '40px', float: 'right'}}>
                    <button onClick={() => this.handleClick()} className="btn btn-success" style={{height: '40px'}}>
                        <i className="fa fa-plus-square">  New Item  </i>
                    </button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="col-sm-6">
                <div className="row">
                    <Title colspan="col-sm-2" title="Items" />
                    <Search type="ITEM" colspan="col-sm-5" placeholder="Nhập tên sản phẩm, giá, từ khóa..."/>
                    { this.renderAddButton() }
                </div>
                <hr />
                <div className="row panel panel-primary">
                    <div className="panel-heading" style={{ fontSize: '18px', background: '#2a3f54' }}>Items List</div>
                    <div className="panel-body" style={{ overflowY: 'scroll', maxHeight: '800px'}}>
                        <table className="table table-bordered table-hover table-striped" style={{ fontSize: '15px' }}>
                            <THead />
                            <TBody type={this.props.type}/>
                        </table>
                    </div>
                </div>
            </div>  
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAddItemButtonShow: state.item.showAddItemButton
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showItemForm: () => dispatch(actions.showItemForm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftCol);