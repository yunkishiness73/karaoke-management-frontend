import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import * as actions from '../../actions/room';
import * as invoiceActions from '../../actions/invoice';
import { connect } from 'react-redux';

class Fieldset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surCharge: 0,
            charge: 0
        }
    }

    showInputValue = () => {
        switch (this.props.name) {
            case 'serviceCharge':
                return this.props.value;
            case 'roomFee':
                return this.props.value;
            case 'surCharge':
                return this.state.surCharge ? this.state.surCharge : this.props.value; 
            case 'totalPrice':
                return this.props.value;
            case 'charge':
                return this.state.charge ? this.state.charge : this.props.value; 
            default:
               return this.props.value;
        }
    }

    renderInput = () => {
        if (this.props.type && this.props.type === 'currency') {
            return <NumberFormat name={this.props.name} disabled={this.props.disabled ? 'disabled' : ''} thousandSeparator={true} suffix={'₫'} className="form-control" value={this.showInputValue()} onValueChange={(values) => {
                const { value } = values;
                // // formattedValue = $2,223
                // // value ie, 2223
                this.setState({ [this.props.name]: value });

                switch (this.props.name) {
                    case 'surCharge':
                        this.props.setSurCharge(value);
                        break;
                    case 'charge':
                        const chargePattern = /^\d+$/;
                        let message = 'Số tiền khách đưa không hợp lệ. Vui lòng kiểm tra lại!';
                        let flag = 1;

                        if (!chargePattern.test(value))
                            flag = 0;
                        
                        if(parseInt(value) < this.props.totalPrice)
                            flag = 0;
                        
                        // if(!flag) {
                        //     alert(message);

                        //     return;
                        // }
                        
                        this.setState({ [this.props.name]: value });
                        this.props.setCharge(value);

                        break;
                }             
                
            }} />
        }

        return <input name={this.props.name} type="text" disabled={this.props.disabled ? 'disabled' : ''} className="form-control" value={this.showInputValue()} />;
    }

    render() {
        console.log('render fieldset');
        console.log(this.state);
        return (
            <fieldset className="form-group">
                <label>{this.props.label}</label>
                {this.renderInput()}
            </fieldset>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setSurCharge: (surCharge) => dispatch(actions.setSurCharge(surCharge)),
        setCharge: (charge) => dispatch(invoiceActions.setCharge(charge))
    }
}

export default connect(null, mapDispatchToProps)(Fieldset)