import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import '../src/style/bootstrap.css'
import '../src/style/font-awesome.css'
import reportWebVitals from './reportWebVitals';
import ContextWrapper from './context/ContextWrapper';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </React.StrictMode>
);
reportWebVitals();
