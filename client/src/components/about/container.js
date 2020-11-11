import React from 'react';
import Header from '../base/header';
import Footer from '../base/footer';

const Container = function() {
  return (
    <div className='wrap about-page'>
      <Header />
      <div>About Us</div>
      <Footer />
    </div>
  );
}

export default Container;