import { Box, Heading, Text,Image, Button, Flex, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar'
import {AddIcon, MinusIcon} from "@chakra-ui/icons"
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'

export const LandingPage = () => {
 

  const data = [{
    id:1,
    image:"./Images/commission.png",
    title:"$0 commissions",
    subtitle:"Focus on your future, not fees",
    text:"Online US-listed stocks, ETFs, mutual funds, and options."
  },
{
  id:2,
  image:"./Images/productchoices.png",
  title:"Product choices",
  subtitle:"Full range of investments",
  text:"Pursue your goals with stocks, options, ETFs, mutual funds, and more."
},
{
  id:3,
  image:"./Images/tools.png",
  title:"Easy-to-use tools",
  subtitle:"Powerful, intuitive platforms",
  text:"Trade online, through Power E*TRADE, or with our award-winning apps."
},
{
  id:4,
  image:"./Images/marketinsight.png",
  title:"Market insights",
  subtitle:"Find your next opportunity",
  text:"Get timely market analysis, plus free Morgan Stanley equity research."
},
{
  id:5,
  image:"./Images/coreportfolios.png",
  title:"Core Portfolios",
  subtitle:"Automated investment management",
  text:"Get a diversified portfolio that's monitored and managed for a low annual advisory fee of 0.30% and $500 minimum."
},
{
  id:6,
  image:"./Images/retirement.png",
  title:"Retirement accounts",
  subtitle:"Take control of tomorrow",
  text:"We'll help you plan and invest for life after work."
}]

const defaultStyle = {
  color:"red"
}
const activeStyle = {
  color:"blue"
}
  return (<>
    <Box>
        <Image src="./Images/homepageDOG.jpg" height="500px" width="100%"/>
        <Heading className="heading" fontSize="48px" color="white" width="500px"  mt="-400px" ml="200px" lineHeight="60px">Be ready for life's biggest moments</Heading>
        <Text color="white" width="500px" ml="200px" mt="10px">Get financially prepared for whatever life throws your way with help from TRADE24 from TIRED-RAIL-4343.</Text>
        <Button ml="200px" mt="30px" bgColor="#5627D8" borderRadius="none" color="white">Get Started</Button>
    </Box>
    <Box bgColor="#241056" height="220px" mt="200px" ml="150px" width="80%" >
      <Text fontSize="30px" fontWeight="500" color="white" textAlign="center" paddingTop="30px">Start investing today</Text>
      <Text color="white" textAlign="center" fontWeight="500" pt="17px">Enjoy $0 commissions on online US-listed stock, ETF, mutual fund, and options trades with no account minimums.</Text>
      <Button bgColor="#5627D8" borderRadius="none" color="white" mt="30px" ml="520px">Open an account</Button>
    </Box>
    <Box>
      <Text color="black" textAlign="center" fontSize="33px" fontWeight="500" mt="50px">Financial solutions for every step in life</Text>
    </Box>
    <Box style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", width:"80%" , margin:"auto",gap:"20px",marginTop:"80px"}}>
      {data.map((ele)=>{
        return (<div  key={ele.id}>
        <Box height="200px" width="80%" margin="auto">
          <Image width="50px" display="block" margin="auto" src={ele.image}/>
          <Text textAlign="center" fontSize="22px" fontWeight="600" paddingTop="10px">{ele.title}</Text>
          <Text textAlign="center" fontWeight="500" paddingTop="5px">{ele.subtitle}</Text>
          <Text textAlign="center" paddingTop="5px">{ele.text}</Text>
          </Box>
          </div> )
      })}
    </Box>

    <Box bgColor="#F6F6F6" height="500px" mt="80px" ml="150px" width="80%">
      <Heading color="black" textAlign="center" size="lg" fontWeight="500" pt="25px">A one-stop shop for your financial goals</Heading>
      <Text textAlign="center" paddingTop="10px">New to online investing? <NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Start here</NavLink></Text>
      <Box style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",gap:"20px",marginTop:"50px"}}>
       
       {/* 1 */}
        <Box bgColor="white" ml="40px" pl="25px" w="90%">
          <Text fontSize="22px" fontWeight="500" pt="18px">Long-term investing</Text>
          <Text fontSize="14px" pt="7px">Take aim at your future goals with an online experience.</Text>
          <Box ml="30px" mt="10px" lineHeight="35px" fontSize="14px"> 
          <ul >
            <li>Easy-to-use website and mobile app</li>
            <li>Broad range of account types</li>
            <li>Insightful education and guidance</li>
          </ul></Box>
          <Text pt="30px" pb="40px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Learn more</NavLink></Text>
        </Box>

        {/* 2 */}
        <Box bgColor="white" ml="20px" pl="25px" w="90%">
          <Text fontSize="22px" fontWeight="500" pt="18px">Trading</Text>
          <Text fontSize="14px" pt="7px">Tackle the markets with a package of resources engineered for those who love to trade.</Text>
          <Box ml="30px" mt="10px" lineHeight="35px" fontSize="14px"> 
          <ul >
            <li ><Text lineHeight="20px">65¢ options contracts and $1.50 futures contracts</Text></li>
            <li>Robust tools and dynamic charts</li>
            <li>Specialized trading support</li>
          </ul></Box>
          <Text pt="20px" pb="40px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Learn more</NavLink></Text>
        </Box>

        {/* 3 */}
        <Box bgColor="white" mr="20px" pl="25px" w="90%">
          <Text fontSize="22px" fontWeight="500" pt="18px">Savings and checking</Text>
          <Text fontSize="14px" pt="7px">Get convenient, low-fee banking from Morgan Stanley Private Bank.</Text>
          <Box ml="30px" mt="10px" lineHeight="35px" fontSize="14px"> 
          <ul >
            <li>FDIC insured</li>
            <li>Free cash transfers</li>
            <li>Competitive rates</li>
          </ul></Box>
          <Text pt="30px" pb="40px"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>Learn more</NavLink></Text>
        </Box>

      </Box>
    </Box>

    <Box bgColor="white" height="600px" mt="50px" ml="150px" width="80%">
      <Text color="black" textAlign="center" fontSize="33px" fontWeight="500" mt="50px">Frequently asked questions</Text>
      <Text textAlign="center"><NavLink style={({isActive})=>{return isActive ? activeStyle : defaultStyle}}>See all FAQs</NavLink></Text>
      <Box width="80%" ml="110px" mt="80px">
        <Accordion allowMultiple >
          <AccordionItem >
          {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontSize="25px" fontWeight="500" paddingTop="10px">
                    Where can I find information on the merger with Morgan Stanley?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize='12px' />
                    ) : (
                      <AddIcon fontSize='12px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontSize="25px" fontWeight="500" paddingTop="10px">
                    How do I open an account?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize='12px' />
                    ) : (
                      <AddIcon fontSize='12px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontSize="25px" fontWeight="500" paddingTop="10px">
                    How do I place a trade?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize='12px' />
                    ) : (
                      <AddIcon fontSize='12px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontSize="25px" fontWeight="500" paddingTop="10px">
                    What are your commissions and fees?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize='12px' />
                    ) : (
                      <AddIcon fontSize='12px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontSize="25px" fontWeight="500" paddingTop="10px">
                    How do you ensure the security and privacy of my account?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize='12px' />
                    ) : (
                      <AddIcon fontSize='12px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

        </Accordion>
      </Box>
    </Box>

    <Box bgColor="#241056" height="220px"  ml="150px" width="80%" >
      <Text fontSize="30px" fontWeight="500" color="white" textAlign="center" paddingTop="30px">Start investing today</Text>
      <Text color="white" textAlign="center" fontWeight="500" pt="17px">Enjoy $0 commissions on online US-listed stock, ETF, mutual fund, and options trades with no account minimums.</Text>
      <Button bgColor="#5627D8" borderRadius="none" color="white" mt="30px" ml="520px">Open an account</Button>
    </Box>

    <Footer/>
  </> )
}
