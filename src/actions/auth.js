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
        let token = '';
        return AuthService.authenticate(username, password)
                          .then(res => {
                            if (res.status === StatusCode.SUCCESS) {
                                token = res.data.token;

                                RoomService.setHeader('Authorization', `Bearer ` + token);
                                AuthService.setHeader('Authorization', `Bearer ` + token);
                               
                                return AuthService.getCurrentUser();
                            }
                          })
                          .then(response => {
                            if (response.status === StatusCode.SUCCESS) {
                                const { firstName, lastName } = response.data;
                                console.log(token);
                                localStorage.setItem('displayName', JSON.stringify(`${firstName} ${lastName}`));
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

  