import BaseService from './BaseService';
import * as AppConstant from '../constants/constants';

class RoomService extends BaseService {
    constructor(props) {
        super(props);
        this.baseURL = AppConstant.API_URL;
        this.requestURL = this.baseURL + '/rooms';
        let token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJraWV0bmd1eWVuNzM5OEBnbWFpbC5jb20iLCJleHAiOjE1NzMwNzIzMzcsImlhdCI6MTU3MzA1NDMzN30.-Ov44os1vQIqw2ZvRstwsBoFlvL7VX7tk46pOLfwhCJ756hiDHVqRrT6VXzvR7E9XrA7Z_blH9-GsAPzVUEwvQ';
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