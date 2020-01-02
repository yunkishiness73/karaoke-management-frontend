import React, { Component } from 'react';
import './style.css';

class Title extends Component {    
    render() {
        return (
            <div className={`${this.props.colspan} + ' ' + title`}>
                    { this.props.title }
            </div>
        );
    }
}

export default Title;