import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const LoginMenu = () => {
  return (
    <Box>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ display: 'inline-block', marginLeft: '10px' }}>
          <Text as="a" href="#login" color="white" textDecoration="none" p={1} borderRadius="5px">
            Login
          </Text>
        </li>
        <li style={{ display: 'inline-block', marginLeft: '10px' }}>
          <Text as="a" href="#signup" color="white" textDecoration="none" p={1} borderRadius="5px">
            Signup
          </Text>
        </li>
      </ul>
    </Box>
  );
};

export default LoginMenu;
