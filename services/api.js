const axios = require('axios');

const api = axios.create({
    baseURL: 'https://sap-10:50000'
});

api.setCookies = function (cookieString) {
    api.defaults.headers['Cookie'] = cookieString; //'B1SESSION=b62f4e86-e857-11ea-8000-00155d04ee00';
}

module.exports = api;