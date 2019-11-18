import { AUTH_SUCCESS, AUTH_LOGOUT } from '../constants/auth';

const initialState = {
    token: '',
    isAuthenticated: false
}

const authSuccess = (state, action) => {
    return {
        ...state,
        token: action.token,
        isAuthenticated: true
    }
}

const authLogOut = (state, action) => {
    return {
        ...state,
        isAuthenticated: false,
        token: ''
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return authSuccess(state, action);
        case AUTH_LOGOUT: 
            return authLogOut(state, action);
        default:
            return state
    }
}

export default reducer;