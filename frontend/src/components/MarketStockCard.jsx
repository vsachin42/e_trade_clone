import React from 'react';
import { Flex,Text,Image, VStack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const MarketStockCard = ({_id,symbol,companyName,image,currentPrice,percentPrice,change,percentChange}) => {
  return (
    <NavLink to={`stock/${_id}`}>
    
    <Flex style={{justifyContent:"space-between",alignItems:"center",marginTop:"1rem"}}>
    <Text>{companyName.substring(0,9)}...</Text>
    <Image  src = {percentChange >0 ? "/Images/upStock.png" : "/Images/down stock.png"} alt={companyName}/>
    <VStack  >
      <Text >₹{currentPrice}</Text>
      <Text style={{color:percentPrice>0?"green":"red"}}>{change} ({percentChange}%)</Text>
    </VStack>
 </Flex>
    
    </NavLink>
  );
}

export default MarketStockCard;
