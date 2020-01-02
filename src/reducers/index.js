import { combineReducers } from 'redux';
import roomReducer from './roomReducer';
import itemReducer from './itemReducer';
import invoiceReducer from './invoiceReducer';
import baseReducer from './baseReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    room: roomReducer,
    item: itemReducer,
    invoice: invoiceReducer,
    alert: baseReducer,
    auth: authReducer
});

export default rootReducer;