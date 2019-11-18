import {
    FETCH_INVOICE_LIST,
    GET_DATEPICKER,
    GET_KEYWORD,
    FETCH_SUMMARY_INVOICE_LIST,
    GET_DATE_RANGE,
    GET_VIEW_TYPE,
    FETCH_INVOICE_ITEM_SUCCESS
} from '../constants/invoice';

const initialState = {
    viewType: '',
    keyword: '',
    datepicker: '',
    statistics: [],
    dateRange: []
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

const getDateRange = (state, action) => {
    return {
        ...state,
        dateRange: action.dateRange
    }
}

const getViewType = (state, action) => {
    return {
        ...state,
        viewType: action.viewType
    }
}

const fetchInvoiceItemSuccess = (state, action) => {
    return {
        ...state,
        invoiceItem: action.invoiceItem
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
        case GET_DATE_RANGE:
            return getDateRange(state, action);
        case GET_VIEW_TYPE:
            return getViewType(state, action);
        case FETCH_INVOICE_ITEM_SUCCESS:
            return fetchInvoiceItemSuccess(state, action);
        default:
            return state;
    }
}

export default reducer;