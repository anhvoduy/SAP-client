import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
        <Link to={`/account/${rowItem.Code}`}>HE</Link>
      </td>
    </tr>
  );
}


Row.propTypes = {
  index: PropTypes.number,
  rowItem: PropTypes.object
}

export default Row;