import React, { useState } from "react";
import axios from "axios"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { LandingPage } from "./LandingPage";
import { Link } from "react-router-dom";

export default function OpenAccount() {
  const [isOpen, setIsOpen] = useState(true);
  // const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const[email,setEmail]=useState("")
  const[city,setCity]=useState("")
  const[DOB,setDob]=useState("")

  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();
  const navigate=useNavigate()

  const handleSubmit =async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      try {
        if(!name || !password || !email ||!city ||!DOB){
          return alert('please fill all the details')
          // toast({

          //   title: "please fill all the details",
          //   status: "failure",
          //   duration: 3000,
          //   isClosable: true,
          // });
          // setUsername("");
          // setPassword("");
          // setConfirmPassword("");
          // setEmail("");
          // setCity("");
          // setDob("")
          // toast.error('Please fill all the details',{
          //   autoclose:3000,
          //   hideProgressBar: true
          // })
         
        }
        const response = await axios.post("https://anxious-lamb-fez.cyclic.app/users/register", {
          name,
          password,
          email,
          city,
          DOB,

        });
        // console.log(response)
        if (response.status === 200) {
          toast({
            title: "Signup successful",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setUsername("");
          setPassword("");
          setConfirmPassword("");
          setEmail("");
          setCity("");
          setDob("")
           navigate("/login")
        }
        else if (response.status === 400) {
          toast({
            title: "User already registered please go to login page",
            status: "failure",
            duration: 3000,
            isClosable: true,
          });
          setUsername("");
          setPassword("");
          setConfirmPassword("");
          setEmail("");
          setCity("");
          setDob("")
           navigate("/login")
        }
      } catch (error) {
        // console.error(error.message);
        toast({
          title: "User already registered please go to login page",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  return (

 


    <><LandingPage />
    {/* <Button colorScheme="blue" onClick={() => setIsOpen(true)}>
      Open Signup Modal
    </Button> */}
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Signup Form</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(event) => setUsername(event.target.value)}
              />
            </FormControl>

            {/* Adding email */}
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormControl>

            {/* Adding city */}
            <FormControl id="city">
              <FormLabel>City</FormLabel>
              <Input
                type="text"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </FormControl>

            {/* Adding date of birth */}
            <FormControl id="DOB">
              <FormLabel>DOB</FormLabel>
              <Input
                type="date"
                value={DOB}
                onChange={(event) => setDob(event.target.value)}
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

            <FormControl id="confirmPassword">
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => setIsOpen(false)}>
            Close
          </Button>
          <Button type="submit" colorScheme="green" onClick={handleSubmit}>
            Signup
          </Button>
          <Button marginLeft={"12px"} type="submit" colorScheme="green" >
           <Link to={"/"}> login</Link>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
 
  );
}
