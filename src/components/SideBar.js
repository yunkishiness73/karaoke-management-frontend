import React, { Component } from 'react';
import userImage from './images/user.png'
import { NavLink } from 'react-router-dom';

class SideBar extends Component {

    getNavLinkClass = path => {
       console.log(this.props.match);
    }

    render() {
        return (
            <div className="col-md-3 left_col">
                <div className="left_col scroll-view">
                    <div className="navbar nav_title" style={{ border: 0 }}>
                        <a href="./index.html" className="site_title"><i className="fa fa-microphone" /> <span>KARAOKE
          IDOL</span></a>
                    </div>
                    <div className="clearfix" />
                    <div className="profile clearfix">
                        <div className="profile_pic">
                            <img src={userImage} alt="" className="img-circle profile_img" />
                        </div>
                        <div className="profile_info">
                            <span>Welcome,</span>
                            <h2>{ "Kiệt" }</h2>
                        </div>
                    </div>
                    <br />
                    <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                        <div className="menu_section">
                            <ul className="nav side-menu">
                                <li className={ this.getNavLinkClass('/') }><NavLink to="/"><i className="fa fa-home" /> Quản Lý Phòng</NavLink></li>
                                <li><NavLink to="/items"><i className="fa fa-cutlery" /> Quản Lý Thực Đơn</NavLink></li>
                                <li><NavLink to="/invoices"><i className="fa fa-edit" /> Quản Lý Hóa Đơn</NavLink></li>
                                <li><NavLink to="/invoices/summarize"><i className="fa fa-bar-chart-o" />Thống Kê Doanh Thu</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default SideBar;