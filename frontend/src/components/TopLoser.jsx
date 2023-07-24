import React from 'react';
import { Box,Flex,Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import StockCardItem from './StockCardItem';

const TopLoser = () => {
    const {stockArr } = useSelector(store=>store.stockReducer);

  return (
    <Box w="50%" m="2rem auto">
            
    <Text fontWeight="500" fontSize="1.3rem" >Top Loser</Text>
    <Flex style={{justifyContent:"space-between",alignItems:"center",fontWeight:"500",marginTop:"1.4rem"}}>
    {
     stockArr.length?stockArr.sort((a,b)=>a.change-b.change).slice(0,4)?.map(ele=><StockCardItem key={ele._id} {...ele}/>):null
    }

    </Flex>

   </Box>
  );
}

export default TopLoser;