import React, { useContext } from 'react'

import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

function LogIn() {
  //  const {isLoggedIn,logIn,logOut,setUserName}=useContext(AuthContext)


  const{name,setName,isLoggedIn,logIn,logOut}=useContext(AuthContext)

  console.log(isLoggedIn)
  const[login,setLogin]=useState("")
 
   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure()
    
      const initialRef = React.useRef(null)
      const finalRef = React.useRef(null)

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
      console.log(response,users.token,users)

       if(response.data.token){
        logIn()
        console.log('user login successfully')
       }
      localStorage.setItem("token",users.token)
      
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

  const defaultStyle = {
    color:"red"
  }
  const activeStyle = {
    color:"blue"
  }

  return (<>
    {/* // <Box p={4}width={"40%"} marginLeft={"450px"} marginTop={"100px"} >
    //   <form onSubmit={handleSubmit}>
    //     <VStack spacing={4}>
    //       <FormControl id="email">
    //         <FormLabel>Email</FormLabel>
    //         <Input
    //           type="email"
    //           value={email}
    //           onChange={(event) => setEmail(event.target.value)}
    //         />
    //       </FormControl>
    //       <FormControl id="password">
    //         <FormLabel>Password</FormLabel>
    //         <Input
    //           type="password"
    //           value={password}
    //           onChange={(event) => setPassword(event.target.value)}
    //         />
    //       </FormControl>
    //       <Flex style={{dispaly:"flex",justifyContent:"space-between", alignItems:"center", width:"300px"}}>
    //       <Button type="submit">Login</Button>
    //       <Text fontSize="13px"><NavLink to="/signup" style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Create New Account</NavLink></Text>
    //       </Flex>
    //     </VStack>
    //   </form>
    // </Box> */}
          <Button onClick={onOpen}><Link to="login">Login/SignUp</Link></Button>
    
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Login</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input ref={initialRef} placeholder='Enter your email' type="email"
                    value={email} onChange={(event) => setEmail(event.target.value)}/>
                </FormControl>
    
                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input  placeholder='Enter your password' type="password"
                    value={password} onChange={(event) => setPassword(event.target.value)}/>
                </FormControl>
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                  LogIn
                </Button>
                <Button onClick={onClose}>Create your account</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          </>
      )
  }

export default LogIn;
