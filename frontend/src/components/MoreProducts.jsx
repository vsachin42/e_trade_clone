import React from 'react';
import { Box, HStack ,Flex, Heading,Text} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const MoreProducts = () => {

  return (
       <Box w="50%" m="auto">
        <Text fontWeight="500" fontSize="1.3rem" >More Products</Text>
        <HStack style={{justifyContent:"space-between",alignItems:"center",fontWeight:"500",margin:"1rem auto"}}>
           <Heading as="h6" size='xs'>F&O</Heading>
           <Heading as="h6" size='xs'>IPO</Heading>
           <Heading as="h6" size='xs'>Intraday</Heading>
           <Heading as="h6" size='xs'>Screender</Heading>
        </HStack>
       </Box>
  );
}

export default MoreProducts;
