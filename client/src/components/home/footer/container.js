import React from 'react';
import info from '../../../../package.json';

const Footer = function() {  
  return (
    <footer className="py-3 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">
          Copyright &copy; 2020 | version {info.version} | Email voduyanh1984@yahoo.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;