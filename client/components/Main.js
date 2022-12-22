import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import SignIn from './SignIn';
import Home from "./Home";
import SignIn from './SignIn';

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/home" />} />
      <Route exact path='/home' element={<Home />} />
    </Routes>
  );
};

export default Main;
