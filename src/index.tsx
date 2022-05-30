import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CounterOrSettings from "./CounterOrSettings";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement);
root.render(
      <CounterOrSettings />
);



reportWebVitals();
