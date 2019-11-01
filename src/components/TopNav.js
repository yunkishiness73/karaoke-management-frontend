import React, { Component } from 'react';

class TopNav extends Component {
    render() {
        return (
            <div className="top_nav">
                <div className="nav_menu">
                    <nav>
                        <div className="nav toggle">
                            <a id="menu_toggle"><i className="fa fa-bars" /></a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li className>
                                <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <img src="images/img.jpg" alt="" />Nguyễn Kiệt
            <span className=" fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-menu dropdown-usermenu pull-right">
                                    <li><a href="javascript:;"> Profile</a></li>
                                    <li>
                                    </li>
                                    <li><a href="login.html"><i className="fa fa-sign-out pull-right" /> Log Out</a></li>
                                </ul>
                            </li>
                            <li role="presentation" className="dropdown">
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default TopNav;