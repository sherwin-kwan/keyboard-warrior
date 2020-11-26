import { useState, useEffect } from "react";
import axios from 'axios';

export default function useArena() {
  
  const [ arenas, setArenas ] = useState([]);
  const [ arena, setArena ] = useState([]); // controls which arena battle the player in
  
  // Get Arena data from server
  useEffect(() => {
    axios.defaults.baseURL = 'http://localhost:3001';

    axios.get('/api/arenas')
      .then(data => setArenas(data.data))
      .catch(err => console.log("Error getting Arena data: ", err));
  }, []);

  return { arenas, setArenas, arena, setArena}
}



