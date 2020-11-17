import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Row = function({ index, rowItem }) {  
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{rowItem.Code}</td>
      <td>{rowItem.Name}</td>
      <td>{rowItem.Balance}</td>
      <td>{rowItem.AccountLevel}</td>
      <td>{rowItem.AccountType}</td>
      <td className='row-btn'>
        <Button variant="link" onClick={() => {console.log('clicked me at:', rowItem.Code)}}>Edit</Button>
      </td>
    </tr>
  );
}

Row.propTypes = {
  index: PropTypes.number,
  rowItem: PropTypes.object
}

export default Row;