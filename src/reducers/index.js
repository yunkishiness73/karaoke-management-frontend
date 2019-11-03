import { combineReducers } from 'redux';
import roomReducer from './roomReducer';
import itemReducer from './itemReducer';
import invoiceReducer from './invoiceReducer';

const rootReducer = combineReducers({
    room: roomReducer,
    item: itemReducer,
    invoice: invoiceReducer
});

export default rootReducer;