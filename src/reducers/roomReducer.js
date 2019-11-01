import { FETCH_ROOM_LIST } from '../constants/room';

const initialState = {}

const fetchRoomList = (state, action) => {
    return {
        ...state,
        rooms: action.rooms
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ROOM_LIST:
            return fetchRoomList(state, action);
        default:
            return state
    }
}

export default reducer;