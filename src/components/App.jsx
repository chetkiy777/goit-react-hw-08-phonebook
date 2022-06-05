import {React, useEffect} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { Phonebook } from './phonebook/Phonebook';
import { AppWrapper } from 'styles/App.styled';
import AppBar from './AppBar';
import authOperations from 'redux/auth/auth-operations';



export const App = () => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(authOperations.refresh(token));
  }, [dispatch, token]);

  return (
    <AppWrapper>
      <AppBar/>

      <Routes>
        <Route path="/" index element={<HomePage/>} />
        <Route
          path="/register"
          element={token ? <Navigate to="/contacts" /> : <RegisterPage />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/contacts" /> : <LoginPage />}
        />
        <Route
          path="/contacts"
          element={token ? <Phonebook /> : <Navigate to="/login" />}
        />
      </Routes>
    </AppWrapper>
  );
};
