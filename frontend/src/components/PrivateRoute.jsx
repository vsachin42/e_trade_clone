import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


const PrivateRoute = ({children}) => {
    const {isLoggedIn,logIn,logOut}=useContext(AuthContext)
    
    if(isLoggedIn===false){
        alert('please login first')
      }

      return children
    

 
}

export default PrivateRoute