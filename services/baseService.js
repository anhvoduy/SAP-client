const request = require('request');

const baseService = function() {    
}

baseService.loginSAP = function() {
    return new Promise(function(resolve, reject) {
        request(url, function(err, res, body) {
            if(err) reject(err);
            else resolve(body);
        });
    });
}

baseService.getItems = async function() {
    return new Promise(function(resolve, reject) {
        request(url, function(err, res, body) {
            if(err) reject(err);
            else resolve(body);
        });
    });
}

module.exports = baseService;