const api = require('./api');
const userInfo = require('../config').userInfo;

const baseService = function() {
}

baseService.loginSAP = function(info) {
    let url = '/b1s/v1/Login';
    return new Promise(function(resolve, reject) {
        api.post(url, info).then(function(res) {
            let { data } = res;
            resolve(data);
        }).catch(function(err) {
            reject(err);
        });
    });
}

baseService.refreshSession = function() {
    let url = '/b1s/v1/Login';
    return new Promise(function(resolve, reject) {
        api.post(url, userInfo).then(function(res) {
            let { SessionId } = res.data;
            api.setCookies(`B1SESSION=${SessionId}`);
            resolve(true);
        }).catch(function(err) {
            console.log('Error:', err);
            reject(false);
        });
    });
}

baseService.getItems = async function(cookieString) {
    let url = '/b1s/v1/Items';
    return new Promise(function(resolve, reject) {
        api.setCookies(cookieString);
        api.get(url).then(function(res) {
            let { data } = res;
            resolve(data);
        }).catch(function(err) {
            reject(err);
        });
    });
}

baseService.getAccountCategoryList = async function() {
    let url = '/b1s/v1/AccountCategoryService_GetCategoryList';
    return new Promise(function(resolve, reject) {
        api.get(url).then(function(res) {
            let { data } = res;
            resolve(data);
        }).catch(function(err) {
            reject(err);
        });
    });
}

baseService.getChartOfAccounts = async function() {
    let url = '/b1s/v1/ChartOfAccounts';
    return new Promise(function(resolve, reject) {
        api.get(url).then(function(res) {
            let { data } = res;
            resolve(data);
        }).catch(function(err) {
            reject(err);
        });
    });
}

module.exports = baseService;