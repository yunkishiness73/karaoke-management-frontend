import { FETCH_ROOM_LIST } from '../constants/room';
import RoomService from '../services/RoomService';

export const fetchRoomListSuccess = (rooms) => {
    return {
        type: FETCH_ROOM_LIST,
        rooms
    }
}

export const fetchRoomList = () => {
    return dispatch => {
        return RoomService.getRoom()
                    .then(res => {
                        dispatch(fetchRoomListSuccess(res.data));
                    })
                    .catch(err => {
                        console.log(err);
                    });
    }
}

export const filterRoomTypeSuccess = (rooms) => {
   
}

export const filterRoomType = (criteria) => {
    return dispatch => {
        return RoomService.filterByRoomType(criteria)
                          .then(res => {
                            dispatch(fetchRoomListSuccess(res.data));
                          })
                          .catch(err => {
                              console.log(err);
                          })
    }
}