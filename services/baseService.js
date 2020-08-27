const request = require('request');
const api = require('./api');

const baseService = function() {    
}

baseService.loginSAP = function() {
    let url = '/b1s/v1/Login';
    let data = {
        CompanyDB: "SBODemoAU",
        UserName: "manager",
        Password: "manager"
    };
    return new Promise(function(resolve, reject) {
        api.post(url, data).then(function(res){
            console.log(res);
            resolve(res);
        }).catch(function(err) {
            reject(err);
        });
    });
}

baseService.getItems = async function() {
    let url = '';
    return new Promise(function(resolve, reject) {
        request(url, function(err, res, body) {
            if(err) reject(err);
            else resolve(body);
        });
    });
}

module.exports = baseService;