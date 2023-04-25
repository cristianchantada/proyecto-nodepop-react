import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { setRequestHeaders } from './api/client';


const token = localStorage.getItem('auth');

if(token){
  setRequestHeaders(token);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App isToken={!!token}  />
    </BrowserRouter>
  </React.StrictMode>
);