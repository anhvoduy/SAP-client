import axios from 'axios';

const API_URL = 'https://SAP-10:50000/b1s/v1/';
const api = axios.create({
    baseURL: API_URL
});

export default api;