import React, { Component } from 'react';
import THead from '../THead';
import TBody from './TBody';
import Search from '../../Search/Search';
import Title from '../../Title/Title';

class LeftCol extends Component {
    render() {
        return (
            <div className="col-sm-7">
                <div className="row">
                    <Title title="Items" />
                    <Search />
                </div>
                <hr />
                <table className="table">
                    <THead />
                    <TBody />
                </table>
            </div>  
        );
    }
}

export default LeftCol;