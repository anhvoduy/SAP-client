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

baseService.addBusinessPartners = async function(cardCode, cardName, cardType) {
    let business = {
        CardCode: cardCode,
        CardName: cardName,
        CardType: cardType
    };
    let url = '/b1s/v1/BusinessPartners';
    return new Promise(function(resolve, reject) {
        api.post(url, business).then(function(res) {
            let { data } = res;
            resolve(data);
        }).catch(function(err) {
            reject(err);
        });
    });
}

baseService.getBusinessPartners = async function(cardCode) {
    let url = `/b1s/v1/BusinessPartners('${cardCode}')`;
    return new Promise(function(resolve, reject) {
        api.get(url).then(function(res) {
            let { data } = res;
            resolve(data);
        }).catch(function(err) {
            reject(err);
        });
    });
}

baseService.updateBusinessPartners = async function(cardCode, cardName) {    
    let business = {
        CardName: cardName
    }
    let url = `/b1s/v1/BusinessPartners('${cardCode}')`;
    return new Promise(function(resolve, reject) {
        api.patch(url, business).then(function(res) {
            let { data } = res;
            resolve(data);
        }).catch(function(err) {
            reject(err);
        });
    });
}

module.exports = baseService;