import { FETCH_ITEM_LIST } from '../constants/item';

const initialState = {}

const fetchItemList = (state, action) => {
    return {
        ...state,
        items: action.items
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEM_LIST:
            return fetchItemList(state, action);
        default:
            return state
    }
}

export default reducer;