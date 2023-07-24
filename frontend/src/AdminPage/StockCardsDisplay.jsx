import { Box, Button, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import "./UserLoans.css"

export const CreditCardsDisplay = ({getCreditCards,_id,symbol,companyName,image,currentPrice,change,percentChange}) => {
  const toast = useToast()
  let token = localStorage.getItem("adminToken")
  let handleDelete = () => {
    const adminToken = token ; // Replace 'YOUR_ADMIN_TOKEN' with the actual admin token.
  
    const config = {
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    };
  
    axios.delete(`https://anxious-lamb-fez.cyclic.app/stocks/delete/${_id}`, config)
      .then((res) => {
        getCreditCards();
        toast({
          title: "STOCK SUCCESSFULLY DELETED",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((error) => {
        // Handle errors, e.g., invalid token, server error, etc.
        console.error(error);
      });
  }
  
  
  // symbol: String,
  //    companyName: String,
  //    image: String,
  //    currentPrice: Number,
  //    change: Number,
  //    percentChange: Number,
  //    "52_week_high": Number,
  //    "52_week_low": Number,
  return (
    <div>
      <Box className="gird-box-image">
          <img style={{width:"250px", height:"140px"}} src={image} alt={image} />
        <Box mb="5px" mt="8px" textAlign={"left"}>
        <Text fontSize={"14px"}>symbol</Text>
        <Text fontSize={"20px"} fontWeight={"bold"}>{symbol}</Text>
        </Box>
        <Box mb="5px" mt="8px" textAlign={"left"}>
          <Text fontSize={"14px"}>companyName</Text>
          <Text fontSize={"18px"} fontWeight={"medium"}>{companyName}</Text>
        </Box>
        <Box mb="5px" mt="8px" textAlign={"left"}>
          <Text fontSize={"14px"}>Current Price</Text>
          <Text fontSize={"18px"} fontWeight={"medium"}>{currentPrice}</Text>
        </Box>
        <Box mb="5px" mt="8px" textAlign={"left"}>
          <Text fontSize={"14px"}>Change</Text>
          <Text fontSize={"18px"} fontWeight={"medium"}>$ {change}</Text>
        </Box>
        <Box mb="5px" mt="8px" textAlign={"left"}>
          <Text fontSize={"14px"}>Percent Change</Text>
          <Text fontSize={"18px"} fontWeight={"medium"}>$ {percentChange}</Text>
        </Box>
          <Button mt="5px" backgroundColor={"red.400"} _hover={{backgroundColor:"red.400"}} onClick={handleDelete}>DELETE STOCK</Button>
      </Box>
    </div>
  )
}
