const axios = require('axios');
const userInfo = require('../config').userInfo;

const api = axios.create({
    baseURL: userInfo.Url
});

api.setCookies = function (cookieString) {
    api.defaults.headers['Cookie'] = cookieString; //'B1SESSION=b62f4e86-e857-11ea-8000-00155d04ee00';
}

module.exports = api;