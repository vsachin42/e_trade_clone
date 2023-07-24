import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexSensex from './IndexSensex';
import SingleProduct from '../Pages/SingleProduct';
// import LogIn from '../Pages/logInPage';
import OpenAccount from '../Pages/signUpPage';
import { LandingPage } from '../Pages/LandingPage';
import LogIn from '../Pages/logInPage';
import AddToCart from '../Pages/AddToCart';


const AllRoutes = () => {
  return (
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/stocks" element={<IndexSensex/>} />
        <Route path='/stock/:id' element={<SingleProduct/>}/>
        <Route path='/addcart' element={<AddToCart/>} />
       </Routes> 
  );
}

export default AllRoutes;
