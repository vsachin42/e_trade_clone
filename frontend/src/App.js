import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      {/* Your other components and content will go here */}
    </ChakraProvider>
  );
}

export default App;
