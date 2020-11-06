import api from './api';

const baseService = function() {
}

baseService.login = function() {
  let msg = {
    CompanyDB: "SBODemoAU",
    UserName: "manager",
    Password: "manager"
  };
  debugger;
  return api.post('/b1s/v1/Login', msg)
  .then(res => {
    const data = res.data;
    return data;
  }).catch(err => {
    console.log(err);
    throw err;
  });
}

export default baseService;