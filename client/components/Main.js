import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './SignIn';

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/signIn" />} />
      <Route exact path='/signIn' element={<SignIn />} />
    </Routes>
  );
};

export default Main;
