import React, { Component } from 'react';
import userImage from './images/user.png'
import { NavLink } from 'react-router-dom';
import './style.css';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: ''
        }
    }
    

    getActiveClass = className => {
        this.setState({ active: className });
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
                                <li onClick={() => this.getActiveClass('act-1')} className={ this.state.active == 'act-1' ? 'active' : '' + 'side-bar' }><NavLink to="/"><i className="fa fa-home" /> Quản Lý Phòng</NavLink></li>
                                <li onClick={() => this.getActiveClass('act-2')} className={ this.state.active == 'act-2' ? 'active' : '' + 'side-bar' }><NavLink to="/items"><i className="fa fa-cutlery" /> Quản Lý Thực Đơn</NavLink></li>
                                <li onClick={() => this.getActiveClass('act-3')} className={ this.state.active == 'act-3' ? 'active' : '' + 'side-bar' }><NavLink to="/invoices"><i className="fa fa-edit" /> Quản Lý Hóa Đơn</NavLink></li>
                                <li onClick={() => this.getActiveClass('act-4')} className={ this.state.active == 'act-4' ? 'active' : '' + 'side-bar' }><NavLink to="/invoices/summarize"><i className="fa fa-bar-chart-o" />Thống Kê Doanh Thu</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default SideBar;