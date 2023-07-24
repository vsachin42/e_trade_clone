import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    useToast,
  } from '@chakra-ui/react'
import axios from 'axios'

  
export const AddCards = ({getCreditCards}) => {
  const toast = useToast()
const token = localStorage.getItem("adminToken")
    const [symbol, setSymbol] = React.useState('')
    const [companyName, setCompanyName] = React.useState('')
    const [image, setImage] = React.useState('')
    const [currentPrice, setCurrentPrice] = React.useState(0)
    const [change, setChange] = React.useState(0)
    const [percentChange, setPercentChange] = React.useState(0)
    const [fiftytwoweekhigh, setfiftytwoweekhigh] = React.useState(0)
    const [fiftytwoweeklow, setfiftytwoweeklow] = React.useState(0)
    

    function reset(){
      setSymbol('')
      setCompanyName('')
      setImage('')
      setCurrentPrice(0)
      setChange(0)
      setPercentChange(0)
      setfiftytwoweekhigh(0)
      setfiftytwoweeklow(0)
    }

    let handleSubmit = (e)=>{
      const adminToken = token ;
      let obj = {
        symbol: symbol,
        companyName: companyName,
        image: image,
        currentPrice: currentPrice,
        change: Number(change),
        percentChange: Number(percentChange),
        fiftytwoweekhigh: Number(fiftytwoweekhigh),
        fiftytwoweeklow : Number(fiftytwoweeklow)
      }

      const config = {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      };

      axios.post("https://anxious-lamb-fez.cyclic.app/stocks/add", obj, config)
    .then((res) => {
      getCreditCards();
      reset();
      toast({
        title: 'NEW CARD ADDED',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    })
    .catch((error) => {
      // Handle errors, e.g., invalid token, server error, etc.
      console.error(error);
    });
    }
    
  return (
    <div>
        <FormControl>
            <FormLabel>Symbol</FormLabel>
            <Input type='text'  value={symbol} onChange={(e)=>setSymbol(e.target.value)} />
            <FormLabel>Company Name</FormLabel>
            <Input type='text' value={companyName} onChange={(e)=>setCompanyName(e.target.value)} />
            <FormLabel>Stock Image</FormLabel>
            <Input type='text' value={image} onChange={(e)=>setImage(e.target.value)} />
            <FormLabel>Current Price</FormLabel>
            <Input type='number'  value={currentPrice} onChange={(e)=>setCurrentPrice(e.target.value)}/>            
            <FormLabel>Change</FormLabel>
            <Input type='number' value={change} onChange={(e)=>setChange(e.target.value)} />
            <FormLabel>Percent Change</FormLabel>
            <Input type='number' value={percentChange} onChange={(e)=>setPercentChange(e.target.value)} />
            <FormLabel>52_week_high</FormLabel>
            <Input type='number' value={fiftytwoweekhigh} onChange={(e)=>setfiftytwoweekhigh(e.target.value)} />
            <FormLabel>52_week_low</FormLabel>
            <Input type='number' value={fiftytwoweeklow} onChange={(e)=>setfiftytwoweeklow(e.target.value)} />
            <Input onClick={handleSubmit} mt="30px" _hover={{backgroundColor:"green.400", boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px", color:"white"}} type='submit' />
        </FormControl>
    </div>
  )
}
// box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;