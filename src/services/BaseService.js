import axios from 'axios';
import AppConstant from '../constants/constants';

class BaseService {
    constructor(props) {
        const service = axios.create({
            headers: {}
        });
        service.interceptors.response.use(this.onSuccess, this.onError);
        this.service = service;
    }

    setHeader(key, value) {
        this.service.defaults.headers.common[key] = value;
    }

    removeHeader(key) {
        delete this.service.defaults.headers.common[key];
    }

    onSuccess(response) {
        return response;
    }

    onError = error => {
        switch (error.response.status) {
            case 401:
                break;
            default:
                return Promise.reject(error);
        }
    }

    get(endpoint) {
        return this.service.get(endpoint);
    }

    post(endpoint, payload) {
        return this.service.request({
            method: 'POST',
            url: endpoint,
            responseType: 'json',
            data: payload
        });
    }

    put(endpoint, payload) {
        return this.service.request({
            method: 'PUT',
            url: endpoint,
            responseType: 'json',
            data: payload
        });
    }

    delete(endpoint, payload) {
        return this.service.request({
            method: 'DELETE',
            url: endpoint,
            responseType: 'json',
            data: payload
        });
    }
}

export default BaseService;