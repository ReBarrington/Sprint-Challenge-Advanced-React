import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Navbar from './components/Navbar';
import App from './App'; // class component



const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>,
  rootElement
);
