import React, { Component } from 'react';
import style from './style.css';

class Title extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="col-sm-1 title">
                    { this.props.title }
            </div>
        );
    }
}

export default Title;