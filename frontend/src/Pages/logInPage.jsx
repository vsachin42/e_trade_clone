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
import { AuthContext } from "../components/context/AuthContext";

function LogIn() {
  //  const {isLoggedIn,logIn,logOut,setUserName}=useContext(AuthContext)


  const{name,setName,isLoggedIn,logIn,logOut}=useContext(AuthContext)

  console.log(isLoggedIn)
  const[login,setLogin]=useState("")
 
   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!email||!password){
      toast({
        title:"Please Enter all the fields",
        status:"warning",
        duration:3000,
        isClosable:true
      })
      return
    }

    //setting userdata object
    const userData={
      email,
      password
    }

     try {
      const response = await axios.post("https://anxious-lamb-fez.cyclic.app/users/login",userData)
      const users = response.data;
      console.log(response,users.token)

       if(response.data.token){
        logIn()
        console.log('user login successfully')
       }
      localStorage.setItem("token",users.token)

      //finding user
      // const foundUser = users.find(
      //   (user) => user.email === email && user.password === password
      // );
      // console.log(foundUser)


      // //finding user email
      // const foundUserEmail = users.find(
      //   (user) => user.email === email && user.password !== password
      // );
       
      // // //finding user password
      // const foundUserPassword = users.find(
      //   (user) => user.email !== email && user.password === password
      // );


      // if (foundUserPassword) {
      //   toast({
      //     title: "Enter Correct Email",
      //     status:"error",
      //     duration: 3000,
      //     isClosable: true,
      //   });
        
      //     setEmail("");
       
      //  }

      //   if (foundUserEmail) {
      //   toast({
      //     title: "Enter Correct Password",
      //     status:"error",
      //     duration: 3000,
      //     isClosable: true,
      //   });
        
      //  setPassword("");
       
      // }
        
      
     
      
      if (response.status===200) {
        toast({
          title: "Login successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
         logIn()
        setEmail("")
        setPassword("")


     
        // setUserName(username)
        // navigate("/");
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
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
