import axios from 'axios';

const API_URL = '', //'https://sap-10:50000';
const api = axios.create({
    baseURL: API_URL
});

export default api;