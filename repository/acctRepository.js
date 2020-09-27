const api = require('./api');

const Factory = function() {
}

Factory.queryData = function(info) {
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

module.exports = baseService;