import BaseService from './BaseService';
import * as AppConstant from '../constants/constants';

class RoomService extends BaseService {
    constructor(props) {
        super(props);
        this.baseURL = AppConstant.API_URL;
        this.requestURL = this.baseURL + '/rooms';
        let token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJraWV0bmd1eWVuNzM5OEBnbWFpbC5jb20iLCJleHAiOjE1NzI1NDgzMDMsImlhdCI6MTU3MjUzMDMwM30.l4Eyce3tMfSof7A-5ilStERZtiNDvwIQuJ0lCYGHrCJLKKY6RyqxqXJHYX9oL3zfJEcLZripCQ6597RvrVdbuQ';
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