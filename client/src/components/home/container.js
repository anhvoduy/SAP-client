import React from 'react';
import Header from '../base/header';
import Footer from '../base/footer';
import Content from './content';

const Container = function() {
  return (
    <div className='wrap home-page'>
      <Header />

      <Content />
      
      <Footer />
    </div>
  );
}

export default Container;