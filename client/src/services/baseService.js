import api from './api';

const baseService = function() {
}

baseService.login = function() {
  let info = {
    CompanyDB: "SBODemoAU",
    UserName: "manager",
    Password: "manager"
  };  
  let url = 'https://sap-10:50000/b1s/v1/Login';
  //url= 'http://localhost:3001/api/loginsap';
  return new Promise(function(resolve, reject) {
    api.post(url, info).then(function(res) {
      let { data } = res;
      console.log(data);
      resolve(data);
    }).catch(function(err) {
      reject(err);
    });
  });
}

export default baseService;