import React from 'react';
import { Flex,Text,VStack, } from '@chakra-ui/react';

const AddToCartCardItem = ({symbol,companyName,currentPrice}) => {
  return (
    <Flex style={{justifyContent:"space-between",alignItems:"center",marginTop:"1rem"}}>
    <Text>{companyName.substring(0,9)}...</Text>
    {/* <Image src={percentChange>0?UpStock:DownStock} alt={companyName}/> */}
    <Text>Stock Symbol - {symbol}</Text>
    <VStack  >
      <Text >₹{currentPrice}</Text>
 
    </VStack>
 </Flex>
  );
}

export default AddToCartCardItem;
