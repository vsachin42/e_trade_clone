import { HStack, Box,Image,Heading ,Flex,Input,Text} from '@chakra-ui/react';
import { AiOutlineSearch } from "react-icons/ai";
import {MdOutlineNotifications} from "react-icons/md"
import {BsCart2} from "react-icons/bs"
import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <HStack>
            <Box>
                <HStack>
                    <Image />
                    <Heading>Trade24</Heading>
                    <NavLink>Explore</NavLink>
                    <NavLink>Investments</NavLink>
                </HStack>
            </Box>
            <Box>
                <HStack>
                    <Box>
                        <AiOutlineSearch/>
                        <Input type="text"/>
                    </Box>
                </HStack>
            </Box>
            <Box>
                <HStack>
                    <MdOutlineNotifications/>
                    <BsCart2/>
                    <Text>Rinkesh</Text>
                </HStack>
            </Box>
        </HStack>
    );
}

export default Navbar;
