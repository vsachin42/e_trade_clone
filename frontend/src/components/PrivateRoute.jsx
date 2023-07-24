import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useToast } from '@chakra-ui/react'


const PrivateRoute = ({children}) => {
    const {isLoggedIn,logIn,logOut}=useContext(AuthContext)
    const toast=useToast()
    if(isLoggedIn===false){
        // alert('please login first')

        toast({
          title: "please login first",
          status: "failed",
          duration: 5000,
          isClosable: true,
          position: "top"
        });

        return
      }

      return children
    

 
}

export default PrivateRoute