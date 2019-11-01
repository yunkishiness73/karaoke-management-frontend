import React, { Component } from 'react';
import Title from '../Title/Title';
import THead from '../THead';
import TBody from '../RightCol/TBody';

class RightCol extends Component {
    render() {
        return (
            <div className="col-sm-5">
                <Title />
                <hr />
                <table className="table">
                    <THead />
                    <TBody />
                </table>
            </div>
        );
    }
}

export default RightCol;