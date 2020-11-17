import React, { useState, useEffect, useCallback } from 'react';
import Header from '../base/header';
import AboutList from './list';
import Footer from '../base/footer';
import baseService from '../../services/baseService';

const About = function() {
  const [accounts, setAccounts] = useState([]);

  const queryData = useCallback(async function () {
    try
    {
      let loginInfo = await baseService.login();
      if(loginInfo) {
        let resAcct = await baseService.getChartOfAccounts();
        let { value } = resAcct;
        setAccounts(value);
      }
    }
    catch (err) {
      throw err;
    }
  }, []);
  
  useEffect(() => {
    queryData();
  },[queryData]);

  return (
    <div className='wrap account-page'>
      <Header />
      
      <AboutList accounts={accounts}/>
      
      <Footer />
    </div>
  );
}

export default About;