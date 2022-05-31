import React from 'react';
import { AppWrapper } from './App.styled';
import AppBar from './AppBar';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { ContactPage } from 'pages/ContactPage';


export const App = () => {
  return (
    <div>
      <AppBar/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/contacts" element={<ContactPage/>} />
      </Routes>
    </div>
  );
};
