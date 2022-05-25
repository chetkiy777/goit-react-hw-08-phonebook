import React from 'react';
import { AppWrapper } from './App.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import AppBar from './AppBar';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { ContactPage } from 'pages/ContactPage';


export const App = () => {
  return (
    <AppWrapper>
      <AppBar/>

      <h1>Phonebook</h1>
        <ContactForm />

        <h1>Contacts</h1>
        <Filter />

        <Contacts/>
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/contacts" element={<ContactPage/>} />
      </Routes>
    </AppWrapper>
  );
};
