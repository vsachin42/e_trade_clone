import React from 'react';
import { Box,Text,Heading } from '@chakra-ui/react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import LoginMenu from './LoginMenu';

const Navbar = () => {
  return (<>
    <Box as="nav" bg="gray.800" color="white" p={4} display="flex" alignItems="center" justifyContent="space-around" >
      <Logo />
      <SearchBar />
      <LoginMenu />
    </Box>
    <img src="./Images/StockGIF.gif" alt="stock gif" width="100%"/>
    <Box width="500px">
    <Text style={{marginTop:"-400px", color:"white", fontSize:"50px"}}>Start by Investing in Expert Choices</Text>
    </Box>
    </>);
};

export default Navbar;
