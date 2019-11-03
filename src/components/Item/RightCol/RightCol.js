import React, { Component } from 'react';
import Title from '../Title/Title';
import THead from '../THead';
import TBody from '../RightCol/TBody';
import * as actions from '../../../actions/item';
import { connect } from 'react-redux';
import style from './style.css';

class RightCol extends Component {
    render() {
        return (
            <div className="col-sm-5" style={{ position: 'fixed', top: '60px', right: '0', width: '35%' }}>
                <Title />
                <hr />
                <div className="formItem">
                 <TBody />
                </div>
                
               
                
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.prop
    }
}

export default connect(mapStateToProps, null)(RightCol);