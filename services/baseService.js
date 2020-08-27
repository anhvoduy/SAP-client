const request = require('request');
const api = require('./api');

const baseService = function() {    
}

baseService.loginSAP = function(info) {
    let url = '/b1s/v1/Login';
    return new Promise(function(resolve, reject) {
        api.post(url, info).then(function(res) {
            let { data } = res;
            resolve(data);
        }).catch(function(err) {
            resolve(err);
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
            resolve(err);
        });        
    });
}

module.exports = baseService;