import React, { Component } from 'react';
import style from './Search.css';

class Search extends Component {
    render() {
        return (      
            <div className="col-sm-3">
                <input type="text" className="form-control search" placeholder="Search" />
            </div>
        );
    }
}

export default Search;