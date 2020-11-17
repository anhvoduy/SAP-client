import React from 'react';
import Header from '../base/header';
import Footer from '../base/footer';
import FormEdit from './form';

const EditContainer = function() {
  return (
    <div className='wrap account-page'>
      <Header />

      <FormEdit />

      <Footer />
    </div>
  );
}

export default EditContainer;