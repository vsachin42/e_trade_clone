import React, { useContext } from 'react'

import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Image,
  useMediaQuery,
} from '@chakra-ui/react'
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
import OpenAccount from './signUpPage';
import { ChevronDownIcon } from '@chakra-ui/icons';
import LogOut from '../components/LogOut';
import { LandingPage } from './LandingPage';



function LogIn() {
  //  const {isLoggedIn,logIn,logOut,setUserName}=useContext(AuthContext)

  const [isLargerThanSm] = useMediaQuery("(min-width: 20cm)")

  const { setName, isLoggedIn, logIn, logOut } = useContext(AuthContext)
  const name = localStorage.getItem("name")

  const isAuth = localStorage.getItem("isAuth")


  // console.log(isLoggedIn)
  const [login, setLogin] = useState("")


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  console.log(isLoggedIn)

  const handleSubmit = async (event) => {
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
      }


      localStorage.setItem("token", users.token)
      localStorage.setItem("name", users.name)
      localStorage.setItem('isAuth', isLoggedIn)
      

      if (response.status === 200) {
        toast({
          title: "Login successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right"
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
    color: "red"
  }
  const activeStyle = {
    color: "blue"
  }

  return (<>
       

    { !isAuth ? <>
      <Button onClick={onOpen}><Link to="login">Login/SignUp</Link></Button>
     

      <Modal

        
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={'50%'}
       width="600px"
       
      >
        <ModalOverlay />
        <ModalContent

        width={'80%'}

        >
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody  pb={6}>
            <Flex justifyContent={'space-between'} padding={'50px'}  flexDirection={{ base: "column", md: "row" }}>
              {/* Left side (login form) */}
              <Box marginTop={'100px'} flex={{ base: "1", md: "1" }}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input width={'sm'} ref={initialRef} placeholder='Enter your email' type="email"
                    value={email} onChange={(event) => setEmail(event.target.value)} />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input width={'sm'} placeholder='Enter your password' type="password"
                    value={password} onChange={(event) => setPassword(event.target.value)} />
                </FormControl>
              </Box>

              {/* Right side (image) */}
              {
              // isLargerThanSm &&
                <Box flex={{ base: "1", md: "1" }}
                ml={{ base: "0", md: "4" }}
                mt={{ base: "4", md: "0" }}
                display={{ base: "none", md: "block" }}>
                  {/* Add your image here */}
                  <Image src="Images/login.jpg" alt="Background Image" />
                </Box>
              }

            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit} >
              LogIn
            </Button>
            <Button onClick={onClose} ><Link to="OpenAccount"> Create your account</Link></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


    </> : <> <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {name}
      </MenuButton>
      <MenuList>
        <MenuItem>My Portfolio</MenuItem>
        <MenuItem onClick={logOut}>Logout</MenuItem>
        {/* <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem> */}
      </MenuList>
    </Menu> </>}
  </>
  )
}

export default LogIn;
