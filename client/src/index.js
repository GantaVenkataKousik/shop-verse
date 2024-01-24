import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './pages/user/UserContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
);

