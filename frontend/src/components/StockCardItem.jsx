import React from 'react';
import { Box ,Image,Text} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
const StockCardItem = (props) => {
  const {_id,symbol,companyName,image,currentPrice,percentPrice,change,percentChange} = props;

  return (
      <NavLink to={`/stock/${_id}`}>
     <Box>
    <Image height="3rem" src={image} alt={companyName}/>
    <Text>{companyName}</Text>

    <Text>₹{currentPrice}</Text>
    <Text style={{color:change<0?"red":"green"}}>{change} ({percentChange}%)</Text>
     </Box>

      </NavLink>
  );
}

export default StockCardItem;

