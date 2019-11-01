import BaseService from './BaseService';
import * as AppConstant from '../constants/constants';

class ItemService extends BaseService {
    constructor(props) {
        super(props);
        this.baseURL = AppConstant.API_URL;
        this.requestURL = this.baseURL + '/items';
        let token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJraWV0bmd1eWVuNzM5OEBnbWFpbC5jb20iLCJleHAiOjE1NzI2MDgxNzgsImlhdCI6MTU3MjU5MDE3OH0.PeAXTe36jWTN8YacLZ7YIjZLoluwBfLEUDjrtUB7NGEuhFZ9LIkBVAVM447-phD18AQeM7chyqNqRZrp9Tq-GA';
        this.setHeader('Authorization', token);
    }

    getAll() {
        return this.get(this.requestURL);
    }

    save(payload) {
        let endpoint = '';
        
        if (payload.id) {
            endpoint = `${this.requestURL}/${payload.id}`
            return this.put(endpoint, payload);
        }

        return this.post(this.requestURL, payload);
    }
    
}

export default new ItemService();