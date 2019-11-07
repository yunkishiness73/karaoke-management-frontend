import BaseService from './BaseService';
import * as AppConstant from '../constants/constants';

class InvoiceService extends BaseService {
    constructor(props) {
        super(props);
        this.baseURL = AppConstant.API_URL;
        this.requestURL = this.baseURL + '/invoices';
        let token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJraWV0bmd1eWVuNzM5OEBnbWFpbC5jb20iLCJleHAiOjE1NzMwNzIzMzcsImlhdCI6MTU3MzA1NDMzN30.-Ov44os1vQIqw2ZvRstwsBoFlvL7VX7tk46pOLfwhCJ756hiDHVqRrT6VXzvR7E9XrA7Z_blH9-GsAPzVUEwvQ';
        this.setHeader('Authorization', token);
    }

    getInvoices(criteria) {
        let endpoint = '';
        let { keyword, datepicker } = criteria;

        if (keyword) 
            endpoint = `${this.requestURL}?keyword=${keyword}`;
    
        if (datepicker) {
            endpoint = endpoint ? `${endpoint}&datepicker=${datepicker}`: `${this.requestURL}?datepicker=${datepicker}`;
        }
          

        return endpoint ? this.get(endpoint) : this.get(this.requestURL);
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

        if (id)
            endpoint = `${this.requestURL}/${id}`;
        
        return this.delete(endpoint);
    }

    getSummaryInvoices(criteria) {
        const { viewType, dateRange } = criteria;
        let endpoint = `${this.requestURL}/summarize`;
       
        if (dateRange && dateRange.length === 2) 
            endpoint = (viewType ?  `${this.requestURL}/summarize?viewType=${viewType}&from=${dateRange[0]}&to=${dateRange[1]}`
                        : `${this.requestURL}/summarize?from=${dateRange[0]}&to=${dateRange[1]}`);
        
        return this.get(endpoint);
    }
    
}

export default new InvoiceService();