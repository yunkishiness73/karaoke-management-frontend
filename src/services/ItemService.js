import BaseService from './BaseService';
import * as AppConstant from '../constants/constants';

class ItemService extends BaseService {
    constructor(props) {
        super(props);
        this.baseURL = AppConstant.API_URL;
        this.requestURL = this.baseURL + '/items';
    }

    getItems(keyword) {
        let endpoint = '';

        if (keyword) {
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