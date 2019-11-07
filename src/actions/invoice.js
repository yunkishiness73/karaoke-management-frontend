import { 
    FETCH_INVOICE_LIST,
    FETCH_INVOICE_FAIL,
    GET_DATEPICKER,
    GET_KEYWORD,
    FETCH_SUMMARY_INVOICE_LIST,
    FETCH_SUMMARY_INVOICE_LIST_FAIL
  } from '../constants/invoice';
import InvoiceService from '../services/InvoiceService';

export const fetchInvoiceListSuccess = (invoices) => {
    return {
        type: FETCH_INVOICE_LIST,
        invoices
    }
}

export const fetchInvoiceList = () => {
    return (dispatch, getState) => {
        const { invoice } = getState();
        const { keyword, datepicker } = invoice;
        const criteria = {
            keyword,
            datepicker
        }
        // console.log(keyword);
        // console.log(datepicker);
        return InvoiceService.getInvoices(criteria)
                            .then(res => {
                                if (res.status === 200) {
                                    dispatch(fetchInvoiceListSuccess(res.data));
                                }
                            })
                            .catch(err => {
                                console.log(err);
                            })
    }
}

export const getDatePicker = (datepicker) => {
    return {
        type: GET_DATEPICKER,
        datepicker
    }
}

export const getKeyword= (keyword) => {
    return {
        type: GET_KEYWORD,
        keyword
    }
}

export const fetchSummaryInvoiceListSuccess = (statistics) => {
    return {
        type: FETCH_SUMMARY_INVOICE_LIST,
        statistics
    }
}

export const fetchSummaryInvoiceList = (criteria) => {
    return dispatch => {
        return InvoiceService.getSummaryInvoices(criteria)
                             .then(res => {
                                if (res.status === 200)
                                    dispatch(fetchSummaryInvoiceListSuccess(res.data));
                             })
                             .catch(err => {

                             })
    }
}

