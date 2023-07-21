import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexSensex from './IndexSensex';

const AllRoutes = () => {
  return (
       <Routes>
        <Route path='/' element={<IndexSensex/>}/>
        <Route path='/stock/:id'/>
       </Routes> 
  );
}

export default AllRoutes;
