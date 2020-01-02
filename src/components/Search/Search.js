import React, { Component } from 'react';
import './Search.css';
import * as actionItem from '../../actions/item';
import * as actionInvoice from '../../actions/invoice';

import { connect } from 'react-redux';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    handleKeyPress = e => {
        if (e.key === 'Enter') {
            switch (this.props.type) {
                case "ITEM":
                    this.props.searchItem(this.state.keyword);
                    break;
                case "INVOICE":
                    this.props.getKeyword(this.state.keyword);
                    this.props.fetchInvoiceList();
                    break;
                default:
                    break;
            }
        }
    }

    handleInputChange = e => {
        let target = e.target;
        let value = target.value;
        let key = target.name;
        
        this.setState({
            [key]: value
        });
    }
    
    render() {
        return (      
            <div className={this.props.colspan ? this.props.colspan : 'col-sm-3'}>
                <input autoComplete="off" value={this.state.keyword} onChange={(e) => this.handleInputChange(e)} onKeyPress={(e) => this.handleKeyPress(e)} name="keyword" type="text" className="form-control search" placeholder={this.props.placeholder} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchItem: keyword => dispatch(actionItem.search(keyword)),
        getKeyword: keyword => dispatch(actionInvoice.getKeyword(keyword)),
        fetchInvoiceList: () => dispatch(actionInvoice.fetchInvoiceList())
    }
}

export default connect(null, mapDispatchToProps)(Search);