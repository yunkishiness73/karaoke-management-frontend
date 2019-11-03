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
        if (this.props.isAddItemButtonShow) {
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
            <div className="col-sm-7">
                <div className="row">
                    <Title colspan="col-sm-2" title="Items" />
                    <Search type="ITEM" />
                    { this.renderAddButton() }
                </div>
                <hr />
                <table className="table">
                    <THead />
                    <TBody />
                </table>
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