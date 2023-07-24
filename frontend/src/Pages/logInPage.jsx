import React, { useContext, useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  useToast,
  useMediaQuery,
} from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { LandingPage } from './LandingPage';

function LogIn() {
  const { isLoggedIn, logIn, logOut } = useContext(AuthContext);
  const name = localStorage.getItem("name");
  let isAuth = localStorage.getItem("isAuth")
  console.log(isAuth)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSubmit = async (event) => {
    // Your login logic remains the same
    // ...
   
      event.preventDefault();
      if (!email || !password) {
        toast({
          title: "Please Enter all the fields",
          status: "warning",
          duration: 3000,
          isClosable: true
        })
        return
      }
  
      //setting userdata object
      const userData = {
        email,
        password
      }
  
      try {
        const response = await axios.post("https://anxious-lamb-fez.cyclic.app/users/login", userData)
        const users = response.data;
  
        console.log(response, users.token, users.name)
  
        if (response.data.token) {
           logIn()
          navigate("/")
          console.log('user login successfully')
  
           localStorage.setItem("token", users.token)
           localStorage.setItem("name", users.name)
           localStorage.setItem('isAuth', true)
        }
  
  
    
        
  
        if (response.status === 200) {
          toast({
            title: "Login successful",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top-right"
          });
          localStorage.setItem('isAuth', true)
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

  

  const handleLogout = () => {
    logOut();
    localStorage.clear(); // Clear all user-related data from local storage
  };

  const [isSmallerThanMd] = useMediaQuery("(max-width: 48em)")

  return (
    <Box>
      {isLoggedIn ? (
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {name}
          </MenuButton>
          <MenuList>
            <MenuItem>My Portfolio</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      ) : (
         
        <>
        
        {/* <LandingPage /> */}
          <Button onClick={onOpen}>
            <Link to="">Login/SignUp</Link>
          </Button>
         

          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            size={'100%'}
            width="600px"
          >
            {/* The rest of your modal content remains the same */}
            {/* ... */}

            <ModalOverlay />
        <ModalContent

        width={'80%'}

        >
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody  pb={6}>
            <Flex  justifyContent={'space-between'} padding={'50px'}  flexDirection={{ base: "column", md: "row" }}>
              {/* Left side (login form) */}
              <Box marginTop={'100px'} flex={{ base: "1", md: "1" }}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input width={'2xs'} ref={initialRef} placeholder='Enter your email' type="email"
                    value={email} onChange={(event) => setEmail(event.target.value)} />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input width={'2xs'} placeholder='Enter your password' type="password"
                    value={password} onChange={(event) => setPassword(event.target.value)} />
                </FormControl>
              </Box>

              {/* Right side (image) */}
              {
              // isLargerThanSm &&
                <Box  flex={{ base: "1", md: "1" }}
                ml={{ base: "0", md: "4" }}
                mt={{ base: "1", md: "0" }}
                display={{ base: "none", md: "block" }}>
                  {/* Add your image here */}
                  <Image src="Images/login.jpg" alt="Background Image" />
                </Box>
              }

            </Flex>
          </ModalBody>

          <ModalFooter margin={"0 10"}  justifyContent={'space-around'}
           width={isSmallerThanMd ? '100%':'40%'} marginBottom={'20px'} >
            <Button colorScheme='blue' mr={1} onClick={handleSubmit} >
              LogIn
            </Button>
            <Button onClick={onClose} ><Link to="OpenAccount"> Create your account</Link></Button>
            <Button onClick={onClose} ><Link to="admin-login"> Admin</Link></Button>
          </ModalFooter>
        </ModalContent>
            
          </Modal>
        </>
      )}
    </Box>
  );
}

export default LogIn;