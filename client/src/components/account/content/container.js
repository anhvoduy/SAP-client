import React from 'react';
import RowItem from './row';

const Content = function({ accounts }) {  
  return (
    <tbody>
      {
        (Array.isArray(accounts) && accounts.length) 
        ? accounts.map((item, index) => <RowItem key={'key' + index} index={index} rowItem={item} />)
        : null
      }      
    </tbody>
  );
}

export default Content;