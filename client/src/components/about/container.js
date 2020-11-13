import React, { useEffect, useCallback } from 'react';
import Header from '../base/header';
import Footer from '../base/footer';
import axios from 'axios';

const data = JSON.stringify({"CompanyDB":"SBODemoAU","UserName":"manager","Password":"manager"});
const config = {
  method: 'get',
  url: 'https://sap-10:50000/b1s/v1/ChartOfAccounts',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': 'B1SESSION=834ba9be-2589-11eb-8000-00155d04ee00; ROUTEID=.node1'
  },
  data : data
};

const Container = function() {
  const queryData = useCallback(async function () {
    try {
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    catch (err) {
      throw err;
    }
  }, []);
  
  useEffect(() => {
    queryData();
  },[queryData]);

  return (
    <div className='wrap about-page'>
      <Header />
      <div>About Us</div>
      <Footer />
    </div>
  );
}

export default Container;