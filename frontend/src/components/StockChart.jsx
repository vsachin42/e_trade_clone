import React,{useEffect, useState} from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';
import Performance from './Performance';
import { Box, VStack } from '@chakra-ui/react';

function  StockChart() {


const [stockChartXValues,setStockChartXValues] = useState([])
const [stockChartYValues,setStockChartYValues] = useState([])
const stockDetails = JSON.parse(localStorage.getItem("stockDetails"))


 const setStocks = (data)=>{
   const x = [];
   const y = [];
   for(let key in data['Time Series (Daily)']){
       x.push(key);
       y.push(data['Time Series (Daily)'][key]['1. open'])
       setStockChartXValues(x)
       setStockChartYValues(y)
   }
 }
 const  fetchStock =async()=> {

   let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockDetails.symbol}&apikey=A9LWYE7YA34GFHJP`;
   const req = await axios.get(API_Call)
   const result = await req.data
   setStocks(result)


 }

  useEffect(()=>{
        fetchStock()
  },[])



    return (
      <VStack >
        <h1>Stock Market</h1>
        <Plot
          data={[
            {
              x: stockChartXValues,
              y: stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'green'},
            }
          ]}
          layout={{width: 720, height: 440, title: `${stockDetails.symbol} Stock Price`}}
        />
      
      </VStack>
    )

}

export default StockChart;