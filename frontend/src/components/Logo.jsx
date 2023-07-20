import React from 'react';
import { Box,Text } from '@chakra-ui/react';

const Logo = () => {
  return (
    <div style={{display:"flex"}}>
      {/* Replace the src attribute with the path to your company logo image */}
      <img src="./Images/trade24.png" alt="Company Logo" style={{ maxHeight: '80px' }} />
      <p style={{marginLeft:"40px",marginTop:"7px"}}>Explore</p>
      <p style={{marginLeft:"20px",marginTop:"7px"}}>Investments</p>
    </div>
  );
};

export default Logo;
