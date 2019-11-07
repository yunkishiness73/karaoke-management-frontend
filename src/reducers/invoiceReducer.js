import { FETCH_INVOICE_LIST, GET_DATEPICKER, GET_KEYWORD, FETCH_SUMMARY_INVOICE_LIST } from '../constants/invoice';
import { startOfMinute } from 'date-fns/esm';

const initialState = {
    keyword: '',
    datepicker: '',
    statistics: []
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

const fetchSummaryInvoiceList = (state, action) => {
    return {
        ...state, 
        statistics: action.statistics
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
        case FETCH_SUMMARY_INVOICE_LIST:
            return fetchSummaryInvoiceList(state, action);
        default:
            return state;
    }
}

export default reducer;