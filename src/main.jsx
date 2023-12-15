import React from 'react';
import ReactDOM from 'react-dom';
import Components from './Components';
import PureComponents from './PureComponents';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Components />
    <PureComponents />
  </React.StrictMode>,
);
