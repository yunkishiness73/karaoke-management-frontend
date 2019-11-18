import { FETCH_ROOM_LIST, FETCH_ROOM_BY_ID_SUCCESS } from '../constants/room';

const initialState = {}

const fetchRoomList = (state, action) => {
    return {
        ...state,
        rooms: action.rooms
    }
}

const fetchRoomByIdSuccess = (state, action) => {
    return {
        ...state,
        roomItem: action.roomItem
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ROOM_LIST:
            return fetchRoomList(state, action);
        case FETCH_ROOM_BY_ID_SUCCESS:
            return fetchRoomByIdSuccess(state, action);
        default:
            return state;
    }
}

export default reducer;