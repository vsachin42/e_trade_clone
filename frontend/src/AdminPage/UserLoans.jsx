import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useToast,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

import "./UserLoans.css"

export const UserLoans = ({name,id,loanData,getUserLoans}) => {
  const toast = useToast()
  let approveLoan = ()=>{
    let obj = {
      [name] : {
        firstName : loanData.firstName,
        lastName : loanData.lastName,
        dob : loanData.dob,
        loanType : loanData.loanType,
        loanTenure : loanData.loanTenure,
        loanAmount : loanData.loanAmount,
        aadharCard : loanData.aadharCard,
        status : true,
      }
    }
    console.log(obj)
    axios.patch(`https://creditguru.onrender.com/users2/${id}`,obj )
    .then((res)=>getUserLoans())
    .catch((err)=>console.log(err))
  }

  let rejectLoan = ()=>{
    axios.delete(`https://creditguru.onrender.com/users2/${id}`)
    .then((res)=>getUserLoans()).catch((err)=>console.log(err))
    toast({
      title: "LOAN REJECTED SUCCESSFULLY",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  }

  
  
  return (
    <div>

    <Box className="gird-box-image">

      <Box mb="5px" mt="8px" textAlign={"left"}>
        <Text fontSize={"14px"}>USER NAME</Text>
        <Text fontSize={"20px"} fontWeight={"bold"}>{name}</Text>
      </Box>
      <Box mb="5px" mt="8px" textAlign={"left"}>
        <Text fontSize={"14px"}>USER DOB</Text>
        <Text fontSize={"18px"} fontWeight={"medium"}>{loanData.dob}</Text>
      </Box>
      <Box mb="5px" mt="8px" textAlign={"left"}>
        <Text fontSize={"14px"}>LOAN AMOUNT</Text>
        <Text fontSize={"18px"} fontWeight={"medium"}>{loanData.loanAmount}</Text>
      </Box>
      <Box mb="5px" mt="8px" textAlign={"left"}>
        <Text fontSize={"14px"}>LOAN TENURE</Text>
        <Text fontSize={"18px"} fontWeight={"medium"}>{loanData.loanTenure}</Text>
      </Box>
      <Box mb="5px" mt="8px" textAlign={"left"}>
        <Text fontSize={"14px"}>LOAN TYPE</Text>
        <Text fontSize={"18px"} fontWeight={"medium"}>{loanData.loanType}</Text>
      </Box>
      <Box mb="5px" mt="8px" textAlign={"left"}>
        <Text fontSize={"14px"}>LOAN STATUS</Text>
        <Text fontSize={"18px"} fontWeight={"medium"} color={`${loanData.status ? "green" : "red"}`}>{loanData.status ? "APPROVED" : "PENDING"}</Text>
      </Box>
      <Box display={"flex"} gap="40px">
        <Button onClick={approveLoan} backgroundColor={"green.400"} _hover={{backgroundColor:"green.400"}}>APPROVE LOAN</Button>
        <Button onClick={rejectLoan} backgroundColor={"red.400"} _hover={{backgroundColor:"red.400"}}>REJECT LOAN</Button>
      </Box>
              
    </Box>
      
    </div>
  );
};
