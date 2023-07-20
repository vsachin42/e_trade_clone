import React, { useState } from 'react';
import { Input, Box, Text } from '@chakra-ui/react';

const SearchBar = () => {
  const [searchOption, setSearchOption] = useState('');
  const options = ['All', 'Stocks', 'Mutual Funds'];

  return (
    <Box position="relative">
      <Input
        type="text"
        placeholder="Search..."
        py={2}
        pr="80px"
        borderRadius="25px"
        bg="white"
        color="black"
        value={searchOption}
        onChange={(e) => setSearchOption(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;


