import api from './api';
import config from '../config';

const baseService = function() {
}

baseService.login = function() {
  let url = '/b1s/v1/Login';
  return new Promise(function(resolve, reject) {
    api.post(url, config.info).then(function(res) {
      let { data } = res;
      resolve(data);
    }).catch(function(err) {
      reject(err);
    });
  });
}

baseService.getChartOfAccounts = function() {
  let url = '/b1s/v1/ChartOfAccounts';
  return new Promise(function(resolve, reject) {
    api.get(url).then(function(res) {
      let { data } = res;
      resolve({
        metadata: data.metadata,
        nextLink: data.nextLink,
        value: data.value
      });
    }).catch(function(err) {
      reject(err);
    });
  });
}

baseService.getChartOfAccountTotal = function() {
  let url = '/b1s/v1/ChartOfAccounts/$count';
  return new Promise(function(resolve, reject) {
    api.get(url).then(function(res) {
      let { data } = res;
      resolve(data);
    }).catch(function(err) {
      reject(err);
    });
  });
}

baseService.getAccountByCode = function(acctCode) {
  let url = `/b1s/v1/ChartOfAccounts('${acctCode}')`;
  return new Promise(function(resolve, reject) {
    api.get(url).then(function(res) {
      let { data } = res;
      resolve(data);
    }).catch(function(err) {
      reject(err);
    });
  });
}

baseService.updateAccount = function(acctCode, acctName) {
  let url = `/b1s/v1/ChartOfAccounts('${acctCode}')`;
  return new Promise(function(resolve, reject) {
    api.patch(url, { Name: acctName, Balance: 5000 }).then(function(res) {
      if(res && (res.status === 200 || res.status === 204)) resolve(true);
      else resolve(false)
    }).catch(function(err) {
      reject(err);
    });
  });
}

export default baseService;