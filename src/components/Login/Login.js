import React, { Component } from 'react';
import './style.css';
import * as actions from '../../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AlertType } from '../../constants/constants';
import * as alert from '../../actions/alert';
import Alert from '../Alert/AlertInfo';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: {
                username: '',
                password: ''
            },
            errors: {},
            formIsValid: true
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        const username = this.state.auth.username;
        const password = this.state.auth.password;

        if (this.state.formIsValid) {
            this.props.onAuth(username, password);
        }
    }

    handleInputValidation = () => {
        const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const username = this.state.auth.username;
        const password = this.state.auth.password;
        const errors = {};
        let formIsValid = true;

        if (!emailPattern.test(username)) {
            errors['username'] = 'Email is not valid';
            formIsValid = false;
        }

        if (!password) {
            errors['password'] = 'Password is not valid';
            formIsValid = false;
        }

        this.setState({ formIsValid, errors });     
    }


    handleInputChange = e => {
        const target = e.target;
        const key = target.name;
        const value = target.value;
    
        this.setState({ auth: { ...this.state.auth, [key]: value } });
    }
    
    render() {
        const token = localStorage.getItem('token');
        let authRedirect = null;

        if (this.props.isAuthenticated || token) {
            authRedirect = <Redirect to="/" />
        }
        
        return (
            <div>
                <a className="hiddenanchor" id="signin" />
                <div className="login_wrapper">
                    <div className="animate form login_form">
                        <section className="login_content">
                            { this.props.showAlert && !this.props.isAuthenticated ? <Alert /> : null }
                            { authRedirect }
                            <form method="post" action="#">
                                <h1>Login Form</h1>
                                <div>
                                    <input onBlur={() => this.handleInputValidation()} onChange={(e) => this.handleInputChange(e)} value={this.state.auth.username} type="text" className="form-control" placeholder="Username" required name="username" />
                                    <div className="error">{this.state.errors['username'] ? ( <i className="fa fa-exclamation-circle fa-xs" aria-hidden="true">{this.state.errors['username']}</i> ) : ''}</div>
                                </div>
                                <div>
                                    <input onBlur={() => this.handleInputValidation()} onChange={(e) => this.handleInputChange(e)} value={this.state.auth.password} type="password" className="form-control" placeholder="Password" required name="password" />
                                    <div className="error">{this.state.errors['password'] ? ( <i className="fa fa-exclamation-circle fa-xs" aria-hidden="true">{this.state.errors['password']}</i> ) : ''} </div>
                                </div>
                                <div>
                                    <input onClick={(e) => this.handleSubmit(e)} type="submit" className="btn btn-default" value="Log in" />
                                </div>
                                <div className="clearfix" />
                                <div className="separator">
                                    <div className="clearfix" />
                                    <br />
                                    <div>
                                        <h1><i className="fa fa-paw" /> Karaoke Vui Vẻ!</h1>
                                        <p>©2019 Đồ án Chuyên Đề Công Nghệ Phần Mềm</p>
                                        <p>Nguyễn Kiệt</p>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAuth: (username, password) => dispatch(actions.auth(username, password)),
        showAlert: (alertType, message) => dispatch(alert.showAlert(alertType, message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);