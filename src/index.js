import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import './assets/scss/index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/bio" element={<App />} />
      <Route path="*" element={<Navigate to="/bio" />} />
    </Routes>
  </BrowserRouter>
);