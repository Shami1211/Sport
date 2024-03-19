import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Stock from './Stock'; // Import the Stock component for rendering each stock
const URL = 'http://localhost:5000/stocks'; // Updated URL for fetching stocks

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Stocks = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setStocks(data.stocks)); // Assuming the API response has an object with a 'stocks' array
  }, []);

  console.log(stocks);

  return (
    <div>
      <h1>Stocks List</h1>
      <ul>
        {stocks &&
          stocks.map((stock, index) => (
            <li key={index}>
              <Stock stock={stock} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Stocks;
