import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';
import * as action from '../../actions/alert';

class AlertInfo extends Component {

    renderAlert = () => {
        switch (this.props.alertType) {
            case 'SUCCESS': 
                return <Alert showIcon={true} timeout={3000} onDismiss={() => this.props.alertOff()} type="success">{ this.props.message }</Alert>
            case 'FAIL': 
                return <Alert showIcon={true} timeout={3000} onDismiss={() => this.props.alertOff()} type="danger">{ this.props.message }</Alert>
        }
    }

    render() {
        return (
            <AlertContainer>
               {
                   this.renderAlert()
               }
            </AlertContainer>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        alertType: state.alert.alertType,
        message: state.alert.message
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => dispatch(action.hideAlert())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo);