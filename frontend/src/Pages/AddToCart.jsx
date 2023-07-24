import React, { useState, useEffect } from 'react';
import { Box, Text, Stack, Flex, Heading, Button } from '@chakra-ui/react';
import axios from 'axios';
import AddToCartCardItem from '../components/AddToCartCardItem';
import { useToast } from '@chakra-ui/react';

const AddToCart = () => {
    const [addToCartItem, setAddToCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const toast = useToast()

    const calculateTotalPrice = (data) => {
    
        
        let tempPrice = 0
        for (let ele of data) tempPrice += ele.currentPrice;
  
        setTotalPrice(tempPrice)
  

    }
    const handleBuy = () => {
        toast({
            title: 'Stock purchased successfully',

            status: 'success',
            duration: 4000,
            isClosable: true,
            position: "top"
        })
        setAddToCart([])
        setTotalPrice(0)
    }
    const getAddToCart =  () => {
        axios.get(`https://anxious-lamb-fez.cyclic.app/users/${localStorage.getItem("userID")}`)
            .then((req) => {
              
                setAddToCart(req.data.user.addToCart);
                calculateTotalPrice(req.data.user.addToCart)
            })

    }
    useEffect(() => {
        getAddToCart()
    }, []);
    return (
        <>

            <Box w="50%" borderRadius="1rem" padding="2rem" m="2rem auto" boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px">


                <Stack>
                    <Flex color="#385898" justifyContent="space-between">
                        <Heading as='h5' size='sm'>Comapany</Heading>
                        <Heading as='h5' size='sm'>Stock Symbol</Heading>
                        <Heading as='h5' size='sm'>Market Price</Heading>
                    </Flex>
                    {addToCartItem?.map(ele => <AddToCartCardItem key={ele._id} {...ele} />)}
                </Stack>
             
                {
                    totalPrice > 0 ? <Box textAlign="center" mt="2rem"><Button colorScheme='whatsapp' onClick={handleBuy}>Buy Now ₹ {totalPrice}</Button></Box> : null
                }

            </Box>


        </>
    );
}

export default AddToCart;
