import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { EndGameContextProvider } from './Context/EndGameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <EndGameContextProvider>
        <App />
      </EndGameContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
