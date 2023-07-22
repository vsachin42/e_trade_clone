import React from 'react'

import { Heading ,Box,Text, Flex, VStack, Center, Stack } from '@chakra-ui/react'
import MostBought from './MostBought'
import MoreProducts from './MoreProducts'
import TopGainers from './TopGainers'
import TopLoser from './TopLoser'
import AllStocks from './AllStocks'
import Footer from "./Footer"

const IndexSensex = () => {
  return (
     <>
        <Stack w="50%" m="auto"  >
            <Text color="#8f8f8f">Market OPENS AT 09:15 AM</Text>
            <Heading as='h3' size='lg'>Index</Heading>
            <Flex style={{justifyContent:"space-between",alignItems:"center",fontWeight:"500"}}>
                <VStack>
                   <Text>NIFTY 50</Text>
                   <Text>19,979.15 0.00(0.00%)</Text>
                </VStack>
                <VStack>
                   <Text>SENSEX</Text>
                   <Text>67,571.90 0.00(0.00%)</Text>
                </VStack>
                <VStack>
                   <Text>BANKNIFTY</Text>
                   <Text>46,186.90 0.00(0.00%)</Text>
                </VStack>

            </Flex>
        </Stack>
        <MostBought/>
        <MoreProducts/>
        <TopGainers/>
        <TopLoser/>
        <AllStocks/>
        <Footer />
       
     </>
  )
}

export default IndexSensex
