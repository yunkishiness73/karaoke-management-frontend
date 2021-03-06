import React, { Component } from 'react';
import LeftCol from './LeftCol/LeftCol';
import RightCol from './RightCol/RightCol';
import * as actions from '../../actions/item';
import { connect } from 'react-redux';
import ItemService from '../../services/ItemService';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowItemForm: false
        }
    }
    
    renderForm = () => {
        if (this.props.isItemFormShow)
            return <RightCol />
    }

    componentWillMount() {
        const token = localStorage.getItem('token');
        
        if (token) 
            ItemService.setHeader('Authorization', `Bearer ` + JSON.parse(token));
    }

    render() {
        return (
            <div className="container-fluid mt-2 pt-2 right_col">
                <div className="col-sm-12">
                    <div className="table-responsive col-sm-12">
                        <div className="row">
                            <LeftCol />
                            {
                                this.renderForm()
                            }
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isItemFormShow: state.item.showItemForm
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showItemForm: () => dispatch(actions.showItemForm())
    }
}

export default connect(mapStateToProps, null)(Item);