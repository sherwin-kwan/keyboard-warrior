// makes a get request to the API for arena information
// controls the state of the arena - which theme is the player in - background image, music etc
import { useState, useEffect } from "react";
import axios from 'axios';


export default function useArena() {

  const [arenas, setArenas] = useState([]);

  useEffect(() => {
    axios.defaults.baseURL = 'http://localhost:3001';

    axios.get('/api/arenas')
      .then(data => {
        console.log("JiLLIAN", data.data)
        setArenas(data.data)
      })
      .catch(err => console.log("Error getting data: ", err));
  }, []);

  return { arenas, setArenas}
}



