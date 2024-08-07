import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/Homepage';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Cart from './pages/Cart';
import ProfilPage from './pages/ProfilPage';
import RegisterPage from './pages/RegisterPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/profilPage' element={<ProfilPage/>}/>
        <Route path='/registerPage' element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();