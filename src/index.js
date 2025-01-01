import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../src/components/App/App';
import { Provider } from 'react-redux';
// import AppHttpRequests from 'components/App/AppHttpRequests';
// import { AppSecondHttpReq } from 'components/App/AppSecondHttpReq';
import './index.css';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
    <BrowserRouter basename='/sandbox-app'>
    <App />
    {/* <AppHttpRequests /> */}
    {/* <AppSecondHttpReq /> */}
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);
