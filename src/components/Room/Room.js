import React, { Component } from 'react';
import RoomItem from './RoomItem';
import Filter from './Filter/Filter';
import Title from '../Title/Title';
import { connect } from 'react-redux';
import * as actions from '../../actions/room';



class Room extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: []
        }
    }

    renderRoomItem = () => {
        let rooms = this.props.roomData.rooms;
        let normalRoomGroup = [];
        let largeRoomGroup = [];
        let VIPRoomGroup = [];

        if (Array.isArray(rooms) && rooms.length > 0) {
            rooms.map((item, key) => {
                if (item.name.indexOf('N') !== -1)
                    normalRoomGroup.push(<RoomItem key={item.name} name={item.name} id={item.id} value={item}/>);

                if (item.name.indexOf('L') !== -1)
                    largeRoomGroup.push(<RoomItem key={item.name} name={item.name} id={item.id} value={item}/>);

                if (item.name.indexOf('V') !== -1)
                    VIPRoomGroup.push(<RoomItem key={item.name} name={item.name} id={item.id} value={item}/>);
            });

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
        console.log();
        console.log('render');
        return (
            <div className="card-deck right_col">
                <div class="row">
                    <Title title="Rooms"/>
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