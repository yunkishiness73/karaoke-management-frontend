import {
   ALERT_OFF,
   ALERT_ON
} from '../constants/constants';

const initialState = {
    alertType: '',
    message: '',
    showAlert: false
}

const showAlert = (state, action) => {
    return {
        ...state,
        showAlert: !state.showAlert,
        alertType: action.alertType,
        message: action.message
    }
}

const hideAlert = (state, action) => {
    return {
        ...state,
        showAlert: !state.showAlert,
        alertType: '',
        message: ''
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALERT_ON:
            return showAlert(state, action);
        case ALERT_OFF:
            return hideAlert(state, action);
        default:
            return state;
    }
}

export default reducer;