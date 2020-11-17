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

export default baseService;