import { 
    FETCH_INVOICE_LIST,
    FETCH_INVOICE_FAIL,
    GET_DATEPICKER,
    GET_KEYWORD,
    FETCH_SUMMARY_INVOICE_LIST,
    FETCH_SUMMARY_INVOICE_LIST_FAIL,
    GET_DATE_RANGE,
    GET_VIEW_TYPE,
    FETCH_INVOICE_ITEM_SUCCESS,
    SET_CHARGE,
    SET_ISSUE_INVOICE
  } from '../constants/invoice';
import InvoiceService from '../services/InvoiceService';
import DetailInvoiceService from '../services/DetailInvoiceService';
import * as alert from './alert';
import { StatusCode, BILL_URL, AlertType } from '../constants/constants';

export const fetchInvoiceListSuccess = (invoices) => {
    return {
        type: FETCH_INVOICE_LIST,
        invoices
    }
}

export const fetchInvoiceItemSuccess = (invoiceItem) => {
    return {
        type: FETCH_INVOICE_ITEM_SUCCESS,
        invoiceItem
    }
}

export const fetchInvoiceItem = (roomId) => {
    return dispatch => {
        return InvoiceService.getInvoiceByRoomId(roomId)
                             .then(res => {
                                if (StatusCode.SUCCESS === res.status)                                     
                                    dispatch(fetchInvoiceItemSuccess(res.data));
                             })
                             .catch(err => {
                                dispatch(alert.showAlert(AlertType.FAIL, err.data.message));
                             })
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
        return InvoiceService.getInvoices(criteria)
                            .then(res => {
                                if (res.status === 200) {
                                    dispatch(fetchInvoiceListSuccess(res.data));
                                }
                            })
                            .catch(err => {
                                dispatch(alert.showAlert(AlertType.FAIL, err.data.message));
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
                                dispatch(alert.showAlert(AlertType.FAIL, err.data.message));
                             })
    }
}

export const fetchWithViewType = (viewType) => {
   return (dispatch, getState) => {
        const { dateRange } = getState();
        const criteria = { viewType, dateRange }

        return InvoiceService.getSummaryInvoices(criteria)
                            .then(res => {
                                if (res.status === 200)
                                    dispatch(fetchSummaryInvoiceListSuccess(res.data));
                            })
                            .catch(err => {
                                dispatch(alert.showAlert(AlertType.FAIL, err.data.message));
                            })
    }
}

export const getDateRange = (dateRange) => {
    return {
        type: GET_DATE_RANGE,
        dateRange
    }
}

export const getViewType = (viewType) => {
    return {
        type: GET_VIEW_TYPE,
        viewType
    }
}

export const saveDetailInvoice = (detailInvoice) => {
    return (dispatch, getState) => {
        const { invoice } = getState();
        const { invoiceItem } = invoice;
        const room = invoiceItem.room;
        let payload = {};
        let invoiceInclude = {};

        if (detailInvoice && detailInvoice.id)
            payload = { ...detailInvoice };
        else if (invoiceItem && invoiceItem.id) {
            invoiceInclude.id = invoiceItem.id;
            payload = { ...detailInvoice, invoice: invoiceInclude, quantity: 1 } 
        }
           
        console.log('state');
        console.log(invoiceItem);
        console.log('payload');
        console.log(payload);

        return DetailInvoiceService.save(payload)
                                    .then(res => {
                                        if (StatusCode.SUCCESS === res.status)
                                           dispatch(fetchInvoiceItem(room.id));
                                    })
                                    .catch(err => {
                                        dispatch(alert.showAlert(AlertType.FAIL, err.data.message));
                                    })
    }
}

export const deleteDetailInvoice = (id) => {
    return (dispatch, getState) => {
        const { invoice } = getState();
        const room = invoice.invoiceItem.room;

        return DetailInvoiceService.remove(id)
                                   .then(res => {
                                        if (StatusCode.SUCCESS === res.status)
                                            dispatch(fetchInvoiceItem(room.id));
                                   })
    }
}

export const issueAnInvoice = (id) => {
    return (dispatch, getState) => {
        const { invoice } = getState();
        const charge = invoice.charge;

        return InvoiceService.issueAnInvoice(id, charge)
                             .then(res => {
                                if (StatusCode.SUCCESS === res.status) {
                                    setTimeout(() => {
                                        window.open(`${BILL_URL}${res.data.data.invoicePdf}`, '_blank');
                                    }, 1500);
                                    setTimeout(() => {
                                        document.location = 'http://localhost:3000/';
                                    }, 3000);
                                }
                             })
                             .catch(err => {
                                dispatch(alert.showAlert(AlertType.FAIL, err.data.message));
                             })
    }
}

export const setCharge = (charge) => {
    return {
        type: SET_CHARGE,
        charge
    }
}

export const setIssueInvoice = (formIsValid) => {
    return {
        type: SET_ISSUE_INVOICE,
        formIsValid
    }
}


