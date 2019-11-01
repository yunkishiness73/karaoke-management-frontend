import React, { Component } from 'react';

class Login extends Component {
    
    componentWillMount() {
        document.body.classList.add('login');
    }
    
    render() {
        return (
            <div>
                <a className="hiddenanchor" id="signin" />
                <div className="login_wrapper">
                    <div className="animate form login_form">
                        <section className="login_content">
                            <form method="post" action="#">
                                <h1>Login Form</h1>
                                <div>
                                    <input type="text" className="form-control" placeholder="Username" required name="username" />
                                </div>
                                <div>
                                    <input type="password" className="form-control" placeholder="Password" required name="password" />
                                </div>
                                <div>
                                    <input type="submit" className="btn btn-default" value="Log in" />
                                </div>
                                <div className="clearfix" />
                                <div className="separator">
                                    <div className="clearfix" />
                                    <br />
                                    <div>
                                        <h1><i className="fa fa-paw" /> Karaoke Vui Vẻ!</h1>
                                        <p>©2019 Đồ án Chuyên Đề Công Nghệ Phần Mềm</p>
                                        <p>Nguyễn Kiệt - Nguyễn Tuấn</p>
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

export default Login;