import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import Navbar from './components/Navbar';
// import Navbar from './components/xyz';
import { BrowserRouter } from 'react-router-dom';
import { LandingPage } from './Pages/LandingPage';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      {/* <Navbar /> */}
      {/* Your other components and content will go here */}
      <LandingPage/>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
