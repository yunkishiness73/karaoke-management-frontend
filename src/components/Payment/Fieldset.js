import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

class Fieldset extends Component {

    renderInput = () => {
        if (this.props.type && this.props.type === 'currency') {
            return <NumberFormat disabled={this.props.disabled ? 'disabled' : ''} thousandSeparator={true} suffix={'₫'} className="form-control" value={this.props.value} />
        }

        return <input type="text" disabled={this.props.disabled ? 'disabled' : ''} className="form-control" value={this.props.value} />;
    }

    render() {
        console.log('render fieldset');
        console.log(this.props.value);
        return (
            <fieldset className="form-group">
                <label>{ this.props.label }</label>
                { this.renderInput() }
            </fieldset>
        );
    }
}

export default Fieldset;