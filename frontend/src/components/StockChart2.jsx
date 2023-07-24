import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
const StockChart = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const apiKey = 'A9LWYE7YA34GFHJP';
    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NVDA&apikey=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        const stockData = response.data['Time Series (Daily)'];
        const stockPrices = Object.values(stockData).map(item => parseFloat(item['4. close']));
        setStockData(stockPrices);
      })
      .catch(error => {
        console.error('Error fetching stock data:', error);
      });
  }, []);

  return (
    <div style={{width:"50%"}}>
      {stockData.length > 0 && (
        <Line
          data={{
            labels: stockData.map((_, index) => `Day ${index + 1}`),
            datasets: [
              {
                label: `AAPL Stock Price`,
                data: stockData,
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
              },
            ],
          }}
        />
      )}
    </div>
  );
};

export default StockChart;
