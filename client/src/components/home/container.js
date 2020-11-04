import React from 'react';
import Header from './header';
import Footer from './footer';
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