import React, { useEffect } from 'react';
import { Text ,Box,Flex} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/stock/action';
import StockCardItem from './StockCardItem';


const MostBought = () => {
  const {stockArr } = useSelector(store=>store.stockReducer);
  console.log(stockArr)
  const dispatch = useDispatch();

 
  useEffect(()=>{
     dispatch(getProduct(dispatch))
  },[])
    
  return (
           
  
          <Box w="50%" m="2rem auto">
            
             <Text fontWeight="500" fontSize="1.3rem" >Most Bought Stock on Trade24</Text>
             <Flex style={{justifyContent:"space-between",alignItems:"center",fontWeight:"500",marginTop:"1.4rem"}}>
             {
              stockArr.length?stockArr.slice(0,4)?.map(ele=><StockCardItem key={ele._id} {...ele}/>):null
             }

             </Flex>

            </Box>
         
  );
}

export default MostBought;
