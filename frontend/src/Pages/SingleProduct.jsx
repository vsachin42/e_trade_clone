import axios from 'axios';
import React, { useState, useEffect } from 'react';
import StockChart from '../components/StockChart';
import { Box, Flex, VStack, Text,Button } from '@chakra-ui/react';
import Performance from '../components/Performance';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import Footer from '../components/Footer';
const initial = {
    "52_week_high":0,
    "52_week_low":0,
    change:0,
    companyName:"",
    currentPrice:0,
    image:"",
    percentChange:0,
    symbol:""
}


const SingleProduct = () => {

  const [stockDetails, setStockDetails] = useState(initial);
  let { stockArr } = useSelector(store =>  store.stockReducer);
  const {id} = useParams()
  const  navigate = useNavigate();
  const toast = useToast()

  const addItemInCart =(userId)=>{
     axios.post(`https://anxious-lamb-fez.cyclic.app/users/addcart/${userId}`,stockDetails)
     .then(()=>{
      toast({
        title: 'Stock added in cart successfully',
       
        status: 'success',
        duration: 4000,
        isClosable: true,
        position:"top"
      })
     })
  }

  const handleAddTocart = ()=>{

  
    const isAuth=JSON.parse(localStorage.getItem("isAuth"))
    if(!isAuth) navigate("/OpenAccount")
    else{
      addItemInCart(localStorage.getItem("userID"))
    }
    
  }


  
  useEffect(() => {

    const element = stockArr.find(ele=>ele._id == id);
    localStorage.setItem("stockDetails",JSON.stringify(element))
    setStockDetails(element)

     

  }, []);

  return (

    <>
      <VStack w="80%" m="auto"  >
       {stockDetails.symbol?   <StockChart />:null}
       <Button onClick={handleAddTocart} colorScheme='messenger'>Add to cart</Button>
      </VStack>
      <Performance />
      <Box >
      <Flex  w="32%" m="1rem auto"  justifyContent="space-between" >
        <Text>Today’s </Text>
        <Text>Today’s</Text>
      </Flex>
      <Flex  w="32%" m="2rem auto" justifyContent="space-between" >
        <Text>Low </Text>
        <Text h="0.3rem" w="50%" bg="#43454c"></Text>
        <Text>High</Text>
      </Flex>

      </Box>

      <Box>
      <Flex w="32%" m="2rem auto" justifyContent="space-between" >
        <Text>52W Low</Text>
        <Text>52W High</Text>
      </Flex>

      <Flex w="32%" m="2rem auto" justifyContent="space-between" >
        <Text>{stockDetails["52_week_low"]}</Text>
        <Text h="0.3rem" w="50%" bg="#43454c"></Text>
        <Text>{stockDetails["52_week_high"]}</Text>
      </Flex>

      </Box>

    <Footer/>
    </>
  );
}

export default SingleProduct;
