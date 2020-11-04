import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';
//import App from './components/app';
import Home from './components/home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();