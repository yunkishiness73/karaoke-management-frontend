import React, { Component } from 'react';
import RoomItem from './RoomItem';
import Filter from './Filter/Filter';
import Title from '../Title/Title';
import { connect } from 'react-redux';
import * as actions from '../../actions/room';
import _ from 'lodash';
import RoomService from '../../services/RoomService';


class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: []
        }
    }

    componentWillMount() {
        const token = localStorage.getItem('token');
        
        if (token) 
            RoomService.setHeader('Authorization', `Bearer ` + JSON.parse(token));
    }

    renderRoomItem = () => {
        let rooms = this.props.roomData.rooms;
        let normalRoomGroup = [];
        let largeRoomGroup = [];
        let VIPRoomGroup = [];

        if (Array.isArray(rooms) && rooms.length > 0) {
            _.each(rooms, (item) => {
                if (item.name.indexOf('N') !== -1)
                normalRoomGroup.push(<RoomItem key={item.name} name={item.name} id={item.id} value={item}/>);

                if (item.name.indexOf('L') !== -1)
                    largeRoomGroup.push(<RoomItem key={item.name} name={item.name} id={item.id} value={item}/>);

                if (item.name.indexOf('V') !== -1)
                    VIPRoomGroup.push(<RoomItem key={item.name} name={item.name} id={item.id} value={item}/>);
            })
            
            return (
                <div className='row'>
                    <div className={'row'}>
                        { normalRoomGroup }
                    </div>
                    <hr />
                    <div className={'row'}>
                        { largeRoomGroup }
                    </div>
                    <hr />
                    <div className={'row'}>
                        { VIPRoomGroup }
                    </div>
                </div>
            );
        }
    }
    

    render() {
        console.log(this.props.match);
        return (
            <div className="card-deck right_col">
                <div className="row">
                    <Title colspan="col-sm-1" title="Rooms"/>
                    <Filter />
                </div>
                <hr />
                { 
                    this.renderRoomItem()
                }
          </div>
        );
    }

    componentDidMount() {
        this.props.fetchRoomList();
        console.log(this.props.roomData.rooms);
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchRoomList: () => dispatch(actions.fetchRoomList())
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        roomData: state.room
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);