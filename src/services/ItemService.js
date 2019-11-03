import BaseService from './BaseService';
import * as AppConstant from '../constants/constants';

class ItemService extends BaseService {
    constructor(props) {
        super(props);
        this.baseURL = AppConstant.API_URL;
        this.requestURL = this.baseURL + '/items';
        let token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJraWV0bmd1eWVuNzM5OEBnbWFpbC5jb20iLCJleHAiOjE1NzI4MTE2NzQsImlhdCI6MTU3Mjc5MzY3NH0.V7jEbQyGjnn7hfbfk81n-A6KZgzMhOGay_URuAfqaIl5ZOJcK_kwyrKFwH6Hh91FsS4Ok5W23RI_ArFli1dkyA';
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