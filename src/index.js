import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { App } from 'App';
// import AppHttpRequests from 'components/App/AppHttpRequests';
import { AppSecondHttpReq } from 'components/App/AppSecondHttpReq';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='acrcane/sandbox-app'>
    {/* <App /> */}
    {/* <AppHttpRequests /> */}
    <AppSecondHttpReq />
    </BrowserRouter>
  </React.StrictMode>
);
