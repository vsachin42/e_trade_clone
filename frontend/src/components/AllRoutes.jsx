import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexSensex from './IndexSensex';
// import LogIn from '../Pages/logInPage';
import OpenAccount from '../Pages/signUpPage';
import { LandingPage } from '../Pages/LandingPage';
import LogIn from '../Pages/logInPage';
import { AdminLogin } from '../AdminPage/AdminLogin';
import { AdminHome } from '../AdminPage/AdminHome';

const AllRoutes = () => {
  return (
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/stocks" element={<IndexSensex/>} />
        <Route path='/stock/:id'/>
        <Route path="/OpenAccount" element={<OpenAccount/>} />
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/admin-home" element={<AdminHome/>}/>
       </Routes> 
  );
}

export default AllRoutes;
