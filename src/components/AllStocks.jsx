import React, { useState } from 'react';
import { Flex, HStack, Stack, Text,Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import MarketStockCard from './MarketStockCard';
import Pagination from './Pagination';

const AllStocks = () => {
    let { stockArr } = useSelector(store =>  store.stockReducer);
     const [page, setPage] = useState(1);
     const updatePage =(value)=>{
        setPage(page=>page+value)
     }
    if (stockArr.length && page == 1) stockArr = stockArr.slice(0, 6)
    else if (stockArr.length && page == 2) stockArr = stockArr.slice(6, 12)
    else if (stockArr.length && page == 3) stockArr = stockArr.slice(12, 18)
    else if (stockArr.length && page == 4) stockArr = stockArr.slice(18, 24)




    return (
        // <Box boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
        <Box w="50%" borderRadius="1rem" padding="2rem" m="auto" boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px">
            <Text fontWeight="500" fontSize="1.3rem" >Top by Market Cap</Text>

            <Stack>
                <Flex color="#385898" justifyContent="space-between">
                    <Text>Comapany</Text>
                    <Text>Market Price</Text>
                </Flex>
                {stockArr.length ? stockArr.map(ele=>< MarketStockCard key={ele._id} {...ele}/>) : null}
            </Stack>
        <Pagination page={page} updatePage={updatePage}/>
        </Box>
       
    );
}

export default AllStocks;
