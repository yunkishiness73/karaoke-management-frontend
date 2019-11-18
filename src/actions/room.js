import { FETCH_ROOM_LIST, FETCH_ROOM_BY_ID_SUCCESS } from '../constants/room';
import { AlertType, StatusCode } from '../constants/constants';
import RoomService from '../services/RoomService';
import * as alert from './alert';

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

export const fetchRoomByIdSuccess = (roomItem) => {
    return {
        type: FETCH_ROOM_BY_ID_SUCCESS,
        roomItem
    }
}

export const fetchRoomById = (id) => {
    return dispatch => {
        return RoomService.getRoom(id)
                    .then(res => {
                        if (StatusCode.SUCCESS === res.status)
                            dispatch(fetchRoomByIdSuccess(res.data.data));
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

export const checkIn = (id) => {
    return dispatch => {
        return RoomService.checkIn(id)
                          .then(res => {
                            if (res.status === StatusCode.SUCCESS) {
                                dispatch(fetchRoomList());
                                dispatch(alert.showAlert(AlertType.SUCCESS, res.data.message))
                            }
                          })
                          .catch(err => {

                          })
    }
}

export const showPayment = () => {
    return {
        type: 'SHOW_MENU'
    }
}