import { useState } from "react";
import axios from "axios"
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

export default function OpenAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
        const response = await axios.post("http://localhost:8080/users", {
          username,
          password,
        });
        if (response.status === 201) {
          toast({
            title: "Signup successful",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setUsername("");
          setPassword("");
          setConfirmPassword("");
          navigate("/login")
        }
      } catch (error) {
        console.error(error);
        toast({
          title: "Signup failed",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
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
          <FormControl id="confirmPassword">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Signup
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
