import { FETCH_ROOM_LIST, FETCH_ROOM_BY_ID_SUCCESS, SET_SURCHARGE } from '../constants/room';

const initialState = {
    surCharge: 0
}

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

const setSurCharge = (state, action) => {
    return {
        ...state,
        surCharge: action.surCharge
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ROOM_LIST:
            return fetchRoomList(state, action);
        case FETCH_ROOM_BY_ID_SUCCESS:
            return fetchRoomByIdSuccess(state, action);
        case SET_SURCHARGE:
            return setSurCharge(state, action);
        default:
            return state;
    }
}

export default reducer;