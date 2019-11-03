import React, { Component } from 'react';
import RowItem from './RowItem';
import * as actions from '../../../actions/item';
import { connect } from 'react-redux';

class TBody extends Component {
    
    renderRowItem = () => {
        let items = this.props.itemData.items;

        if (Array.isArray(items) && items.length > 0) {
            return items.map((item, value) => {
                return <RowItem value={item} key={item.id} />
            })
        }
    }

    render() {
        return (
            <tbody>
               {
                   this.renderRowItem()
               }
            </tbody>
        );
    }

    componentDidMount() {
        this.props.fetchItemList();
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return {
       itemData: state.item
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchItemList: () =>  dispatch(actions.fetchItemList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TBody);