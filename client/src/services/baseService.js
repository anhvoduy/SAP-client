import api from './api';
import config from '../config';

const baseService = function() {
}

baseService.login = function() {
  let url = 'https://sap-10:50000/b1s/v1/Login';
  //let url= 'https://localhost:50000/b1s/v1/Login';
  return new Promise(function(resolve, reject) {
    api.post(url, config.info).then(function(res) {
      let { data } = res;
      console.log(data);
      resolve(data);
    }).catch(function(err) {
      reject(err);
    });
  });
}

baseService.getChartOfAccounts = function() {  
  return new Promise(function(resolve, reject) {
    api.get('/b1s/v1/ChartOfAccounts').then(function(res) {
      let { data } = res;
      console.log(data);
      resolve(data);
    }).catch(function(err) {
      reject(err);
    });
  });
}

export default baseService;