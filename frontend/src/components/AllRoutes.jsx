import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexSensex from './IndexSensex';
// import LogIn from '../Pages/logInPage';
import OpenAccount from '../Pages/signUpPage';
import { LandingPage } from '../Pages/LandingPage';
import LogIn from '../Pages/logInPage';
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
  return (
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/stocks" element={<IndexSensex/>} />
        <Route path='/stock/:id'/>
        <Route path='/login' element={<LogIn />}/>
        <Route path="/OpenAccount" element={<OpenAccount/>} />
        
       </Routes> 
  );
}

export default AllRoutes;
