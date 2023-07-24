import { Box, Button, Text, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'

export const UserDisplayCard = ({ id, name, mail, getUserData }) => {
  const toast = useToast();

  let handleDelete = () => {
    axios.delete(`https://creditguru.onrender.com/users/${id}`).then((res) => {
      getUserData();
      toast({
        title: "USER SUCCESSFULLY DELETED AND BLOCKED",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    });
  };
  return (
    <div>
        <Box padding="20px" boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
          <Text textAlign={"left"} fontWeight={"bold"} >USER DETAILS</Text>
          <Box mb="5px" mt="8px" textAlign={"left"}>
          <Text fontSize={"14px"}>Name</Text>
          <Text> {name} </Text>
          </Box>
          <Box mb="5px" mt="5px" textAlign={"left"}>
            <Text fontSize={"14px"}>Email</Text>
            <Text> {mail} </Text>
          </Box>
          <Button mt="10px" backgroundColor={"red.400"} onClick={handleDelete}>Block User</Button>
        </Box>
    </div>
  )
}
