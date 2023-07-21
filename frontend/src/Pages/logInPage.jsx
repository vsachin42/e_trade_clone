import React, { useContext } from 'react'

import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../components/context/AuthContext';

function LogIn() {
  const {isLoggedIn,logIn,logOut,setUserName}=useContext(AuthContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!username||!password){
      toast({
        title:"Please Enter all the fields",
        status:"warning",
        duration:3000,
        isClosable:true
      })
      return
    }
    try {
      const response = await axios.get("mongodb+srv://soni:soni@cluster0.f78prrs.mongodb.net/trade24?retryWrites=true&w=majority")
      const users = response.data;
      const foundUser = users.find(
        (user) => user.username === username && user.password === password
      );

      const foundUserName = users.find(
        (user) => user.username === username && user.password !== password
      );
       
      const foundUserPassword = users.find(
        (user) => user.username !== username && user.password === password
      );

      if (foundUserPassword) {
        toast({
          title: "Enter Correct Username",
          status:"error",
          duration: 3000,
          isClosable: true,
        });
        
        setUsername("");
       
      }

        if (foundUserName) {
        toast({
          title: "Enter Correct Password",
          status:"error",
          duration: 3000,
          isClosable: true,
        });
        
        setUsername("");
       
      }
        
      
     
      
      if (foundUser) {
        toast({
          title: "Login successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        logIn()

        setUsername("");
        setPassword("");
        setUserName(username)
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Login failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4}width={"40%"} marginLeft={"450px"} marginTop={"100px"} >
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>
          <Button type="submit">Login</Button>
        </VStack>
      </form>
    </Box>
  );
}

export default LogIn;
