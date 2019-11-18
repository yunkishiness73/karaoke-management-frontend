import React, { Component } from 'react';
import * as actions from '../../../actions/item';
import { connect } from 'react-redux';
import _ from 'lodash';
import NumberFormat from 'react-number-format';

class TBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {
                name: '',
                unit: '',
                price: ''
            }
        }
    }


    handleInputChange = e => {
        let target = e.target;
        let value = target.value;
        let key = target.name;
        let item = {};

        if (!_.isEmpty(this.props.editItem)) {
            item = this.props.editItem;
        } else {
            item = this.state.item;
        }

        item[key] = value;

        this.setState({ item });
    }

    handleInputValidation = e => {

    }

    handleSubmit = () => {
        console.log(this.props.editItem);
        if (this.props.editItem && this.props.editItem.id) {
            this.props.saveItem(this.props.editItem);
            return this.props.hideItemForm();
        }

        this.props.saveItem(this.state.item);
        return this.props.hideItemForm();
    }

    handleCancel = () => {
        this.props.hideItemForm();
    }

    render() {
        console.log('render');
        return (
            <form id="form" className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="name" className="col-sm-3 control-label">Sản phẩm</label>
                    <div className="col-sm-9">
                        <input value={this.props.editItem ? this.props.editItem.name : this.state.item.name} name="name" onChange={(e) => this.handleInputChange(e)} type="text" id="name" className="form-control" placeholder="Tên sản phẩm *" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="unit" className="col-sm-3 control-label">Đơn vị tính</label>
                    <div className="col-sm-9">
                        <input value={this.props.editItem ? this.props.editItem.unit : this.state.item.unit} name="unit" onChange={(e) => this.handleInputChange(e)} type="text" id="unit" className="form-control" placeholder="Đơn vị tính *" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="price" className="col-sm-3 control-label">Giá tiền</label>
                    <div className="col-sm-9">
                    <NumberFormat className="form-control" placeholder="Giá tiền sản phẩm *" value={this.props.editItem ? this.props.editItem.price : this.state.item.price} thousandSeparator={true} suffix={'₫'} onValueChange={(values) => {
                        const {value} = values;
                        // formattedValue = $2,223
                        // value ie, 2223
                        let item = {};

                        if (!_.isEmpty(this.props.editItem)) {
                            item = this.props.editItem;
                        } else {
                            item = this.state.item;
                        }
                
                        item['price'] = value;
                
                        this.setState({ item });
                    }}/>
                        {/* <input value={this.props.editItem ? this.props.editItem.price : this.state.item.price} name="price" onChange={(e) => this.handleInputChange(e)} type="text" id="price" className="form-control" placeholder="Giá tiền sản phẩm *" /> */}
                    </div>
                </div>
                <div className="form-group">
                    <div className="row" style={{textAlign: 'center', marginTop:'10px'}}>
                        <div className="col-sm-4" ></div>
                        <div className="col-sm-3">
                            <button value="reset" type="reset" onClick={(e) => this.handleSubmit()} className="btn btn-success" style={{height: '40px'}}>
                                <i className="fa fa-plus-square"> Add Item  </i>
                            </button>
                        </div>
                        <div className="col-sm-2" style={{ marginLeft: '-40px'}}>
                            <button value="reset" onClick={() => this.handleCancel()} type="reset" style={{height: '40px', color: '#D9534F'}} className="btn" >Cancel</button>
                        </div>
                        <div className="col-sm-2" ></div>
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        itemData: state.item,
        editItem: state.item.editItem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchItemList: () => dispatch(actions.fetchItemList()),
        saveItem: (item) => dispatch(actions.saveItem(item)),
        hideItemForm: () => dispatch(actions.hideItemForm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TBody);