import logo from './logo.svg';
import './App.css';
import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState('Data will arrive from API in 3 seconds');

  async function getData() {
    const theData = await axios.get('/api');
    console.log('DATA IS: ', theData.data);
    setData(theData.data.message)
  };
  setTimeout(getData, 3000);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
