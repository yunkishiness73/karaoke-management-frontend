import BaseService from './BaseService';
import * as AppConstant from '../constants/constants';

class AuthService extends BaseService {
    constructor(props) {
        super(props);
        this.baseURL = AppConstant.API_URL;
        this.requestURL = this.baseURL + '/authenticate';
    }

    authenticate(username, password) {
        let payload = { username, password };

        return this.post(this.requestURL, payload);
    }

    getCurrentUser() {
        const endpoint = `${this.baseURL}/users/me`;

        return this.get(endpoint);
    }
}

export default new AuthService();