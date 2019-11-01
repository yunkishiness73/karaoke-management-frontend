import { combineReducers } from 'redux';
import roomReducer from './roomReducer';
import itemReducer from './itemReducer';

const rootReducer = combineReducers({
    room: roomReducer,
    item: itemReducer
});

export default rootReducer;