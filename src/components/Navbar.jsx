import React, { useState } from 'react'
import { Box,Flex,IconButton,Input,InputGroup,InputLeftElement,useDisclosure,
    Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,
    DrawerContent,DrawerCloseButton,Button,Image,
    Popover,PopoverTrigger,PopoverContent,
  PopoverBody,PopoverArrow, useTimeout,} from '@chakra-ui/react';
    import { FaBars, FaSearch, FaUserCircle, FaShoppingCart, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [isInvestmentHovered, setIsInvestmentHovered] = useState(false);
  const [isAccountHovered, setIsAccountHovered] = useState(false);
  const [isTradingHovered, setIsTradingHovered] = useState(false);
  const [delayedCloseTimer, setDelayedCloseTimer] = useState(null);

  const handleInvestmentMouseLeave = () => {
    // Set a delay for closing the dropdown
    const timer = setTimeout(() => {
      setIsInvestmentHovered(false);
    }, 200); // Adjust the delay time as needed (200 milliseconds in this case)
    setDelayedCloseTimer(timer);
  };

  const handleAccountMouseLeave = () => {
    // Set a delay for closing the dropdown
    const timer = setTimeout(() => {
      setIsAccountHovered(false);
    }, 200); // Adjust the delay time as needed (200 milliseconds in this case)
    setDelayedCloseTimer(timer);
  };

  const handleTradingMouseLeave = () => {
    // Set a delay for closing the dropdown
    const timer = setTimeout(() => {
      setIsTradingHovered(false);
    }, 200); // Adjust the delay time as needed (200 milliseconds in this case)
    setDelayedCloseTimer(timer);
  };

  // Function to cancel the delayed closing if the cursor re-enters the dropdown
  const handleInvestmentMouseEnter = () => {
    if (delayedCloseTimer) {
      clearTimeout(delayedCloseTimer);
      setDelayedCloseTimer(null);
    }
  };

   
  return (<>
    <Box className="main" bg="white" boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px">
        <Flex className='flexupper' bg="#241056"  color="white" alignItems="center"  px={4} py={2} ml="15%" w="100%">
        <Box>
             <Link className="nav-upper" to="/aboutus"><b>About Us</b></Link>
          </Box>
          <Box mx={8}>
            <Link className="nav-upper" to="/contactus"><b>Contact Us</b></Link>
          </Box></Flex>
          <Flex>
      <Box alignItems="center" width="12.5%" ml="10px" mt="-15px">
        {/* Logo */}
        <Link to="/"><Image  src="/Images/TRADE24BR.gif" width="190px"/></Link></Box>

        {/* Menu */}
        
        <Flex className='flex' ml="1.8%" color="black" display={{ base: "none", md: "flex" }} alignItems="center">

          {/* Accout Types */}

        <Box
          mx={4}
          onMouseEnter={() => setIsAccountHovered(true)}
          onMouseLeave={handleAccountMouseLeave}
          
        >
          {/* onMouseEnter and onMouseLeave handlers for hovering */}
          <Popover
            isOpen={isAccountHovered}
            onOpen={() => setIsAccountHovered(true)}
            onClose={() => setIsAccountHovered(false)}
            placement="bottom-start"
            
          >
            <PopoverTrigger>
              <Link className="nav-link" >
                <b>Account Types</b>
              </Link>
            </PopoverTrigger>
            {/* Conditionally show the dropdown content */}
            <PopoverContent
              bg="white"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              zIndex={10}
              onMouseEnter={handleInvestmentMouseEnter}
              onMouseLeave={handleAccountMouseLeave}
              width="150px"
              borderRadius="0"
              my={4}
              lineHeight="20px"
              pt={3}
              pl={3}
              
            >
              <PopoverArrow />
              {/* Dropdown menu options */}
              <Link to="" >Brokerage</Link><br />
              <Link to="">Retirement</Link><br />
              <Link to="" >Core Portfolios</Link><br/>
              <Link to="" >Managed Portfolios</Link><br/>
              <Link to="" >Small Business</Link><br/>
              <Link to="" >Bank</Link><br/>
              {/* Add more options as needed */}
            </PopoverContent>
          </Popover>
        </Box>

        {/* Investment Choices */}

          <Box
          mx={4}
          onMouseEnter={() => setIsInvestmentHovered(true)}
          onMouseLeave={handleInvestmentMouseLeave}
          
        >
          {/* onMouseEnter and onMouseLeave handlers for hovering */}
          <Popover
            isOpen={isInvestmentHovered}
            onOpen={() => setIsInvestmentHovered(true)}
            onClose={() => setIsInvestmentHovered(false)}
            placement="bottom-start"
            
          >
            <PopoverTrigger>
              <Link className="nav-link" >
                <b>Investing Choices</b>
              </Link>
            </PopoverTrigger>
            {/* Conditionally show the dropdown content */}
            <PopoverContent
              bg="white"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              zIndex={10}
              onMouseEnter={handleInvestmentMouseEnter}
              onMouseLeave={handleInvestmentMouseLeave}
              width="150px"
              borderRadius="0"
              my={4}
              lineHeight="20px"
              pt={3}
              pl={3}
              
            >
              <PopoverArrow />
              {/* Dropdown menu options */}
              <Link to="" >Stocks</Link><br />
              <Link to="" >Mutual Funds</Link><br/>
              <Link to="">Options</Link><br />
              <Link to="" >IPO / New Issues</Link><br/>
              <Link to="" >ETFs</Link><br/>
              <Link to="" >Futures</Link><br/>
              <Link to="" >Bonds and CDs</Link><br/>
              <Link to="" >Prebuild Portfolios</Link><br/>
              {/* Add more options as needed */}
            </PopoverContent>
          </Popover>
        </Box>

        {/* New to Investing  */}

          <Box mx={4}>
            <Link className="nav-link"><b>New to Investing</b></Link>
          </Box>

          {/* Trading */}

          <Box
          mx={4}
          onMouseEnter={() => setIsTradingHovered(true)}
          onMouseLeave={handleTradingMouseLeave}
          
        >
          {/* onMouseEnter and onMouseLeave handlers for hovering */}
          <Popover
            isOpen={isTradingHovered}
            onOpen={() => setIsTradingHovered(true)}
            onClose={() => setIsTradingHovered(false)}
            placement="bottom-start"
            
          >
            <PopoverTrigger>
              <Link className="nav-link" >
                <b>Trading</b>
              </Link>
            </PopoverTrigger>
            {/* Conditionally show the dropdown content */}
            <PopoverContent
              bg="white"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              zIndex={10}
              onMouseEnter={handleInvestmentMouseEnter}
              onMouseLeave={handleTradingMouseLeave}
              width="150px"
              borderRadius="0"
              my={4}
              lineHeight="20px"
              pt={3}
              pl={3}
              
            >
              <PopoverArrow focus="none"/>
              {/* Dropdown menu options */}
              <Link to="" >Platforms</Link><br />
              <Link to="">Margin Trading</Link><br />
              <Link to="" >Execution Quality</Link><br/>
              {/* Add more options as needed */}
            </PopoverContent>
          </Popover>
        </Box>

        {/* Rates */}

          <Box mx={4}>
            <Link className="nav-link"><b>Rates</b></Link>
          </Box>

          {/* Knowlwdge */}

          <Box mx={4}>
            <Link className="nav-link"><b>Knowledge Center</b></Link>
          </Box>
        </Flex>

        {/* Search */}
        <Box  display={{ base: "none", md: "block" }} flex={1}  mx={4} my={3}>
          <InputGroup ml="10%">
            <InputLeftElement pointerEvents="none" children={<FaSearch />} />
            <Input type="text" placeholder="Search" w="200px" />
          </InputGroup>
        </Box>

        {/* Right Side */}
        <Flex alignItems="center" >
          {/* Login */}
          <Box mx={0} mr={2}>
            {/* <Menu>
              <MenuButton as={IconButton} aria-label="Login" icon={<FaUserCircle />} variant="ghost" />
              <MenuList>
                <MenuItem>Login</MenuItem>
                <MenuItem>Sign Up</MenuItem>
              </MenuList>
            </Menu> */}
            <Popover>
              <PopoverTrigger>
                <IconButton aria-label="Login" icon={<FaUserCircle />} variant="ghost" />
                  </PopoverTrigger>  
                    <PopoverContent w="200px">
                      <PopoverArrow />
                        <PopoverBody> 
                          <Link to="/login">Login</Link><br/>
                          <Link to="/signup">Sign Up</Link><br/>
                          <Link to="/faq">FAQ's</Link><br/>
                          <Link to="/whishlist">Whishlist</Link><br/>
                      </PopoverBody>
                    </PopoverContent>
            </Popover>
          </Box>

          {/* Notification */}
          <Box mx={4}>
            <IconButton aria-label="Notification" icon={<FaBell />} variant="ghost" />
          </Box>

          {/* Cart */}
          <Box mx={4}>
            <IconButton aria-label="Cart" icon={<FaShoppingCart />} variant="ghost" />
          </Box>

          {/* Menu Button */}
          <Box display={{ base: "flex", md: "none" }}>
            <IconButton  ref={btnRef} aria-label="Menu" icon={<FaBars />} variant="ghost" onClick={onOpen} />
            <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    
          </Box>
        </Flex>
        </Flex>
      
    </Box>
    </>
  );
}

export default Navbar