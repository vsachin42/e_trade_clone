import React from 'react';
// import { ChakraProvider } from '@chakra-ui/react';
// import Navbar from './components/Navbar';
// import Navbar from './components/xyz';
// import { BrowserRouter } from 'react-router-dom';
import { LandingPage } from './Pages/LandingPage';
import IndexSensex from './components/IndexSensex';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';

function App() {
  return (<>
      <Navbar/>
      {/* <LandingPage/> */}
      <AllRoutes/>
      </>);
}

export default App;
