import React, { Component } from 'react';
import * as actions from '../../../actions/item';
import { connect } from 'react-redux';
import _ from 'lodash';
import NumberFormat from 'react-number-format';
import './style.css';

class TBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {
                name: '',
                unit: '',
                price: 0
            },
            errors: {},
            formIsValid: false,
            isEditItemEdited: false
        }
    }

    handleInputValidation = () => {
        const pattern = /^\s*$/;
        const pricePattern = /^[1-9][0-9]*$/;
        const errors = {};
        let formIsValid = true;
        let name, unit, price;

        if (!_.isEmpty(this.props.editItem)) {
            console.log('ahihi');
            ({ name, unit, price } = this.props.editItem );
        } else {
            name = this.state.item.name;
            unit = this.state.item.unit;
            price = this.state.item.price;
        }
        
        console.log('item');
        console.log(name, unit, price);

        if (pattern.test(name)) {
            errors['name'] = 'Name can not be empty';
            formIsValid = false;
        }

        if (pattern.test(unit)) {
            errors['unit'] = 'Unit can not be empty';
            formIsValid = false;
        }

        if (!pricePattern.test(price)) {
            errors['price'] = 'Price must greater than 0';
            formIsValid = false;
        }

        console.log('form valid ' +formIsValid);

        this.setState({ formIsValid, errors });     
    }

    handleInputChange = e => {
        let target = e.target;
        let value = target.value;
        let key = target.name;
        let item = {};
        let { isEditItemEdited } = this.state;

        if (!_.isEmpty(this.props.editItem)) {
            item = this.props.editItem;
            isEditItemEdited = true;

        } else {
            item = this.state.item;
        }

        item[key] = value;

        this.setState({ item, isEditItemEdited });
    }

    handleSubmit = () => {
        console.log(this.props.editItem);
        if (this.props.editItem && this.props.editItem.id && !this.state.isEditItemEdited) {
            console.log('day la dau');
            this.props.saveItem(this.props.editItem);
            return this.props.hideItemForm();
        } else if (this.state.formIsValid) {
            this.props.saveItem(this.state.item);
            return this.props.hideItemForm();
        }
        
        console.log(this.state.formIsValid, !this.state.isEditItemEdited);
            
     
    }

    handleCancel = () => {
        this.props.hideItemForm();
        this.props.fetchItemList();
    }

    render() {
        console.log('render');
        console.log(this.state.formIsValid, _.isEmpty(this.props.editItem));
        console.log(this.props.editItem);
        return (
            <form id="form" className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="name" className="col-sm-2 control-label">Sản phẩm</label>
                    <div className="col-sm-6">
                        <input onBlur={() => this.handleInputValidation()} value={this.props.editItem ? this.props.editItem.name : this.state.item.name} name="name" onChange={(e) => this.handleInputChange(e)} type="text" id="name" className="form-control" placeholder="Tên sản phẩm *" />
                    </div>
                    <span className="error">{this.state.errors['name'] ? ( <i className="fa fa-exclamation-circle fa-xs" aria-hidden="true">{this.state.errors['name']}</i> ) : ''} </span>
                </div>
                <div className="form-group">
                    <label htmlFor="unit" className="col-sm-2 control-label">Đơn vị tính</label>
                    <div className="col-sm-6">
                        <input onBlur={() => this.handleInputValidation()} value={this.props.editItem ? this.props.editItem.unit : this.state.item.unit} name="unit" onChange={(e) => this.handleInputChange(e)} type="text" id="unit" className="form-control" placeholder="Đơn vị tính *" />
                    </div>
                    <span className="error">{this.state.errors['unit'] ? ( <i className="fa fa-exclamation-circle fa-xs" aria-hidden="true">{this.state.errors['unit']}</i> ) : ''} </span>
                </div>
                <div className="form-group">
                    <label htmlFor="price" className="col-sm-2 control-label">Giá tiền</label>
                    <div className="col-sm-6">
                    <NumberFormat className="form-control" placeholder="Giá tiền sản phẩm *" value={this.props.editItem ? this.props.editItem.price : this.state.item.price} thousandSeparator={true} suffix={'₫'} onValueChange={(values) => {
                        const {value} = values;
                        // formattedValue = $2,223
                        // value ie, 2223
                        let item = {};
                        let { isEditItemEdited } = this.state;

                        if (!_.isEmpty(this.props.editItem)) {
                            item = this.props.editItem;
                            isEditItemEdited = true;
                            console.log('vao day');
                        } else {
                            item = this.state.item;
                        }
                
                        item['price'] = value;
                
                        this.setState({ item, isEditItemEdited });
                    }} onBlur={() => this.handleInputValidation()} />
                    </div>
                    <span className="error">{this.state.errors['price'] ? ( <i className="fa fa-exclamation-circle fa-xs" aria-hidden="true">{this.state.errors['price']}</i> ) : ''} </span>
                </div>
                <div className="form-group">
                    <div className="row" style={{textAlign: 'center', marginTop:'10px'}}>
                        <div className="col-sm-4" ></div>
                        <div className="col-sm-3">
                            <button disabled={(!this.state.formIsValid && _.isEmpty(this.props.editItem)) ? 'disabled' : ''} value="reset" type="reset" onClick={(e) => this.handleSubmit()} className="btn btn-success" style={{height: '40px'}}>
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