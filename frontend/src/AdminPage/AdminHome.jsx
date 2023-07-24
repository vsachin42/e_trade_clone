import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { UserLoans } from "./UserLoans";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserDisplayCard } from "./UserDisplayCard";
import "./AdminUserCard.css"
import { CreditCardsDisplay } from "./CreditCardsDisplay";
import { AddCards } from "./AddCards";

export const AdminHome = () => {


    // https://creditguru.onrender.com/users2  use this route to get the laons issued by the website

  const [userdata, setUserData] = useState([]);

  const [loanData, setLoanData] = useState([]);

  const [cardData, setCardData] = useState([]);

  const adminToken = localStorage.getItem('adminToken')

  let navigate = useNavigate()

  function getUserData() {
    axios
      .get("https://anxious-lamb-fez.cyclic.app/")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getUserLoans(){
    axios.get("https://creditguru.onrender.com/users2")
    .then((res)=>{
        setLoanData(res.data);
    })
    .catch((err)=>console.log(err))
    
  }

  function getCreditCards(){
    axios.get("https://anxious-lamb-fez.cyclic.app/stocks")
    .then((res)=>{
        setCardData(res.data);
    })
    .catch((err)=>console.log(err))
  }


  useEffect(() => {
    getUserData();
    getUserLoans();
    getCreditCards();
  }, []);

  useEffect(()=>{
    if(adminToken!==null){
     navigate("/admin-home")
    }
  },[adminToken])


  return (
    <div>
      <Box mt="50px">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList >
            <Tab>Registered Users</Tab>
            <Tab>Loans</Tab>
            <Tab>Stocks</Tab>
            <Tab>Add Stocks</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
               <Text mb="50px" fontWeight={"bold"} fontSize={"22px"} textAlign={"center"}>REGISTERED USERES OF TRADE24</Text>
              <Box className="userDisplayCard" >
            
              
              {userdata?.map((user, index) => {
                return (
                  <UserDisplayCard
                    key={index}
                    {...user}
                    getUserData={getUserData}
                  />
                );
              })}
              
              </Box>
            </TabPanel>
            <TabPanel>
            {
                loanData.length <= 0 ? (
                    <Text mb="50px" fontWeight={"bold"} fontSize={"22px"} textAlign={"center"}>NO LOANS YET</Text>
                  ) : (
                    <>

                    <Text mb="50px" fontWeight={"bold"} fontSize={"22px"} textAlign={"center"}>LOANS STATUS OF USERS</Text>
                    <Box className="userDisplayCard" >
                    {loanData.map((loan, index) => {
                        const name = Object.keys(loan)[0]
                        const loanDataProps = loan[name];
                      return (
                        <UserLoans
                          key={index}
                          name={name}
                          id={loan.id}
                          loanData={loanDataProps}
                          getUserLoans={getUserLoans}
                        />
                      );
                    })}
                    </Box>

                    </>
                )
              }
            </TabPanel>
            <TabPanel>
              {
                cardData.length <= 0? (
                  <Text mb="50px" fontWeight={"bold"} fontSize={"22px"} textAlign={"center"}>NO CREDIT CARD YET</Text>
                  ) : (
                      <>

                    <Text mb="50px" fontWeight={"bold"} fontSize={"22px"} textAlign={"center"}>CREDIT CARDS OF USERS</Text>

                      <Box className="userDisplayCard">

                        {cardData.map((ele)=>(
                          <CreditCardsDisplay
                            key={ele._id}
                            {...ele}
                            getCreditCards={getCreditCards}
                          />
                        ))}

                      </Box>

                      </>
                  )
              }
            </TabPanel>
            <TabPanel>
            <Text mb="50px" fontWeight={"bold"} fontSize={"22px"} textAlign={"center"}>ADD NEW CARD</Text>
              <AddCards getCreditCards={getCreditCards}/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
};
