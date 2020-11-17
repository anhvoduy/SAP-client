import React, { useEffect, useCallback } from 'react';
import Header from '../base/header';
import Footer from '../base/footer';
import baseService from '../../services/baseService';

const Container = function() {
  const queryData = useCallback(async function () {
    try 
    {
      let loginInfo = await baseService.login();
      console.log('loginInfo:', loginInfo);

      let accounts = await baseService.getChartOfAccounts();
      console.log('accounts:', accounts);
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