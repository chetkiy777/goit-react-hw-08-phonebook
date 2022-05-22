import React from 'react';
import { AppWrapper } from './App.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import AppBar from './AppBar';
import { Routes } from 'react-router-dom';

export const App = () => {
  return (
    <AppWrapper>
      <AppBar/>
      
      <Routes>
        <h1>Phonebook</h1>
        <ContactForm />

        <h1>Contacts</h1>
        <Filter />

        <Contacts/>
      </Routes>
    </AppWrapper>
  );
};
