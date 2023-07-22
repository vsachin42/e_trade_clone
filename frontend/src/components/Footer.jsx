import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const defaultStyle = {
        color:"red"
      }
      const activeStyle = {
        color:"blue"
      }
      
  return (
    <Box bgColor="#EEEEEE" height="500px" mt="50px" width="100%">
      <Box style={{display:"grid",paddingTop:"70px", margin:"auto",gridTemplateColumns:"repeat(4,1fr)",gap:"20px",marginTop:"50px", width:"70%"}}>
       
       {/* 1 */}
        <Box  ml="40px" pl="25px" w="90%"  >
          <Text fontSize="16px" fontWeight="600">About Us</Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Company Overview</NavLink></Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Investor Relations</NavLink></Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Newsroom</NavLink></Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Careers</NavLink></Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Privacy</NavLink></Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>About Our Ads</NavLink></Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Accessibility at E*TRADE</NavLink></Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Your Privacy Choices </NavLink></Text>
        </Box>

        {/* 2 */}
        <Box  ml="20px" pl="25px" w="90%" >
          <Text fontSize="16px" fontWeight="600">Service</Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Contact Us</NavLink></Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>FAQs</NavLink></Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Forms and Applications</NavLink></Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Financial Consultants</NavLink></Text>
        </Box>

        {/* 3 */}
        <Box  mr="20px" pl="25px" w="90%" >
          <Text fontSize="16px" fontWeight="600">Quick Links</Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Open An Account</NavLink></Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Fund My Account</NavLink></Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Cash Management</NavLink></Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Stock Plans</NavLink></Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Executive Services</NavLink></Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Security Center</NavLink></Text>
          <Text pt="20px" fontSize="13px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Site Map</NavLink></Text>
        </Box>
        {/* 4 */}
        <Box  mr="20px" pl="25px" w="90%" >
           <Text fontSize="16px" fontWeight="600">Connect with us</Text>
           <Image src="./Images/connect.png" mt="15px" ml="-7px"/>
        </Box>

      </Box>
    </Box>
  )
}

export default Footer