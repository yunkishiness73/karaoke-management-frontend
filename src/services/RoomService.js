import BaseService from './BaseService';
import * as AppConstant from '../constants/constants';

class RoomService extends BaseService {
    constructor(props) {
        super(props);
        this.baseURL = AppConstant.API_URL;
        this.requestURL = this.baseURL + '/rooms';
    }

    getRoom(id) {
        if (id) 
            return this.get(`${this.baseURL}/rooms/${id}`);
            
        return this.get(`${this.baseURL}/rooms`);
    }

    filterByRoomType(criteria) {
        let endpoint = '';
        
        if (criteria) 
            endpoint = `${this.requestURL}/?${criteria}`;

        return this.get(endpoint);
    }

    checkIn(id) {
        let endpoint = '';

        if (!id)
            return null;
        
        endpoint = `${this.requestURL}/checkIn/${id}`;
        
        return this.get(endpoint);
    }

    checkOut(id, surCharge) {
        let endpoint = '';

        if (!id)
            return null;
        
        if (surCharge)
            endpoint = `${this.requestURL}/checkOut/${id}?&surCharge=${surCharge}`;
        else
            endpoint = `${this.requestURL}/checkOut/${id}`;
        
        return this.get(endpoint);
    }
    
}

export default new RoomService();