import React from 'react';
import info from '../../../package.json';
import logo from '../../images/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a  className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
          App Coins: { info.version }
        </a>
      </header>
    </div>
  );
}

export default App;
