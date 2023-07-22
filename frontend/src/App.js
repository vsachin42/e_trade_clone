import React from 'react';

import Navbar from './components/Navbar';
import LogIn from './Pages/logInPage';
import OpenAccount from './Pages/signUpPage';

function App() {
  return (
    <>
      <Navbar />
      {/* Your other components and content will go here */}
    {/* <OpenAccount /> */}
    <LogIn />
    </>
   
  );
}

export default App;
