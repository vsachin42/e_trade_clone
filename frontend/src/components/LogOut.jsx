import { Button, useToast } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


const LogOut = () => {
  const {isLoggedIn,logIn,logOut}=useContext(AuthContext)
  const toast=useToast()
  return (
    <Button onClick={()=>logOut()}>Log Out</Button>
  )
}

export default LogOut