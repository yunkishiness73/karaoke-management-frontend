import { 
    AUTH_SUCCESS,
    AUTH_LOGOUT
  } from '../constants/auth';
  import { AlertType, StatusCode } from '../constants/constants';
  import AuthService from '../services/AuthService';
  import BaseService from '../services/BaseService';
  import RoomService from '../services/RoomService';
  import * as alert from './alert';

export const authSuccess = (token) => {
    localStorage.setItem('token', JSON.stringify(token));

    return {
        type: AUTH_SUCCESS,
        token
    }
}

export const auth = (username, password) => {
    return dispatch => {
        return AuthService.authenticate(username, password)
                          .then(res => {
                            if (res.status === StatusCode.SUCCESS) {
                                let token = res.data.token;

                                RoomService.setHeader('Authorization', `Bearer ` + token);
                                dispatch(authSuccess(token));
                            }
                          })
                          .catch(err => {

                          })
    }
}

export const logOut = () => {
    localStorage.removeItem('token');

    return {
        type: AUTH_LOGOUT
    }
}

  