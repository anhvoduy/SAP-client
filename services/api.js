const axios = require('axios');

const api = axios.create({
    baseURL: 'https://sap-10:50000'
});

module.exports = api;