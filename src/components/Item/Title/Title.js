import React, { Component } from 'react';
import style from './style.css';

class Title extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div style={{ fontSize: '30px', textAlign: 'center' }}>Thêm sản phẩm</div>
            </div>
        );
    }
}

export default Title;