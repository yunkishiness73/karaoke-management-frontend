import BaseService from './BaseService';
import * as AppConstant from '../constants/constants';

class ItemService extends BaseService {
    constructor(props) {
        super(props);
        this.baseURL = AppConstant.API_URL;
        this.requestURL = this.baseURL + '/items';
        let token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJraWV0bmd1eWVuNzM5OEBnbWFpbC5jb20iLCJleHAiOjE1NzMwNzIzMzcsImlhdCI6MTU3MzA1NDMzN30.-Ov44os1vQIqw2ZvRstwsBoFlvL7VX7tk46pOLfwhCJ756hiDHVqRrT6VXzvR7E9XrA7Z_blH9-GsAPzVUEwvQ';
        this.setHeader('Authorization', token);
    }

    getItems(keyword) {
        let endpoint = '';

        if (keyword) {
            console.log('keyword');
            endpoint = `${this.requestURL}?keyword=${keyword}`;
            return this.get(endpoint);
        }
    
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

    deleteItemById(id) {
        let endpoint = '';
        console.log(id);
        if (id)
            endpoint = `${this.requestURL}/${id}`;
        
        return this.delete(endpoint);
    }
    
}

export default new ItemService();