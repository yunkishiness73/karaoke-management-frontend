import React, { Component } from 'react';
import Title from '../../Title/Title';
import THead from '../THead';
import TBody from '../RightCol/TBody';
import * as actions from '../../../actions/item';
import { connect } from 'react-redux';
import './style.css';

class RightCol extends Component {
    render() {
        return (
            <div className="col-sm-6" style={{ position: 'fixed', top: '60px', right: '0', width: '40%' }}>
                <div class="row">
                    <Title colspan="col-sm-5" title="Add New Item" />
                </div>
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