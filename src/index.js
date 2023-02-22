import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './utils/App';
import { StoreProvider } from './utils/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
