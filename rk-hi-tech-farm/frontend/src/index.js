import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import store from './store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <PayPalScriptProvider deferLoading={true}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PayPalScriptProvider>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
