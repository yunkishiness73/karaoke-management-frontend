import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions/auth';

class TopNav extends Component {

    logOut = (e) => {
        e.preventDefault();

        localStorage.removeItem('token');
        localStorage.removeItem('displayName');

        document.location = '/login';
    }

    render() {
        return (
            <div className="top_nav">
                <div className="nav_menu">
                    <nav>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/login" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <img src="images/img.jpg" alt="" /> { JSON.parse(localStorage.getItem('displayName')) }
            <span className=" fa fa-angle-down" />
                                </Link>
                                <ul className="dropdown-menu dropdown-usermenu pull-right">
                                    <li><Link onClick={(e) => this.logOut(e)} to="/login"><i className="fa fa-sign-out pull-right" /> Log Out</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signOut: () => dispatch(actions.logOut())
    }
}

export default connect(null, mapDispatchToProps)(TopNav);