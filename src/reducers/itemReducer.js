import { FETCH_ITEM_LIST, EDIT_ITEM, SHOW_ITEM_FORM, HIDE_ITEM_FORM, SHOW_ADD_ITEM_BUTTON } from '../constants/item';

const initialState = {
    showItemForm: false,
    hideItemForm: true,
    showAddItemButton: true
}

const fetchItemList = (state, action) => {
    return {
        ...state,
        items: action.items
    }
}

const loadEditItem = (state, action) => {
    return {
        ...state,
        editItem: action.item
    }
}

const showItemForm = (state, action) => {
    return {
        ...state,
        showItemForm: true,
        showAddItemButton: false
    }
}

const hideItemForm = (state, action) => {
    return {
        ...state,
        showItemForm: false,
        showAddItemButton: true,
        editItem : {}

    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEM_LIST:
            return fetchItemList(state, action);
        case EDIT_ITEM:
            return loadEditItem(state, action);
        case SHOW_ITEM_FORM:
            return showItemForm(state, action);
        case HIDE_ITEM_FORM:
            return hideItemForm(state, action);
        default:
            return state;
    }
}

export default reducer;