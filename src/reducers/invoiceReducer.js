import { FETCH_INVOICE_LIST, GET_DATEPICKER, GET_KEYWORD } from '../constants/invoice';
import { startOfMinute } from 'date-fns/esm';

const initialState = {
    keyword: '',
    datepicker: ''
}

const fetchInvoiceList = (state, action) => {
    return {
        ...state,
        invoices: action.invoices
    }
}

const getDatePicker = (state, action) => {
    return {
        ...state,
        datepicker: action.datepicker
    }
}

const getKeyword = (state, action) => {
    return {
        ...state,
        keyword: action.keyword
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
        editItem: {}

    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_INVOICE_LIST:
            return fetchInvoiceList(state, action);
        case GET_DATEPICKER:
            return getDatePicker(state, action);
        case GET_KEYWORD:
            return getKeyword(state, action);
        default:
            return state;
    }
}

export default reducer;