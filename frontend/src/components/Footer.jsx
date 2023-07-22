import React from 'react';
import { Box,Image } from '@chakra-ui/react';
import footerImage from "../images/footer.png";

const Footer = () => {
  return (
     <Box mt="1rem">
        <Image src={footerImage} />
     </Box>
  );
}

export default Footer;
