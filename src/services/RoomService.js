import BaseService from './BaseService';
import * as AppConstant from '../constants/constants';

class RoomService extends BaseService {
    constructor(props) {
        super(props);
        this.baseURL = AppConstant.API_URL;
        this.requestURL = this.baseURL + '/rooms';
        let token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJraWV0bmd1eWVuNzM5OEBnbWFpbC5jb20iLCJleHAiOjE1NzI4MTE2NzQsImlhdCI6MTU3Mjc5MzY3NH0.V7jEbQyGjnn7hfbfk81n-A6KZgzMhOGay_URuAfqaIl5ZOJcK_kwyrKFwH6Hh91FsS4Ok5W23RI_ArFli1dkyA';
        this.setHeader('Authorization', token);
    }

    getRoom() {
        return this.get(`${this.baseURL}/rooms`);
    }

    filterByRoomType(criteria) {
        let endpoint = '';
        
        if (criteria) 
            endpoint = `${this.requestURL}/?${criteria}`;

        return this.get(endpoint);
    }
    
}

export default new RoomService();