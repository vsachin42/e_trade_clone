import { Box ,Button} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

const Pagination = ({page,updatePage}) => {
    let { stockArr } = useSelector(store =>  store.stockReducer);
  return (
      <Box m="2rem auto 0rem auto"  textAlign="center">
         <Button colorScheme='facebook'isDisabled={page === 1} onClick={()=>updatePage(-1)}>Previous</Button>
         <Button isDisabled>{page}</Button>
         <Button colorScheme='facebook'onClick={()=>updatePage(1)} isDisabled={page === Math.ceil(stockArr.length === page)}>Next</Button>
      </Box>
  );
}

export default Pagination;