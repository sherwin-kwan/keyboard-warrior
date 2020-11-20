// Libraries
import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';

// Styles
// import 'styles/App.css';

// Components
import StartGame from './StartGame';
import Map from './Map';
import Arena from './Arena';
import Outcome from './Outcome'

function App() {
  return (
    <div className="App">
      <StartGame />
      <Map />
      <Arena />
      <Outcome />
    </div>
  );
}

export default App;
