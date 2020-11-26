import { useState, useEffect } from "react";
import axios from 'axios';

export default function useArena() {
  
  const [ arenas, setArenas ] = useState([]);
  const [ arena, setArena ] = useState([]); // controls which arena battle the player in
  const [ cleanArenas, setCleanArenas ] = useState([]); //the Arenas as they are in the DB - without the key beaten. This is the state that should be used at the beginning of a game
  
  // Get Arena data from DB
  useEffect(() => {
    axios.defaults.baseURL = 'http://localhost:3001';

    axios.get('/api/arenas')
      .then((data) => {
        // Remove Boss Arena from response
        const normalArenas = data.data.filter(arena => arena.name !== 'Boss');
        setArenas(normalArenas);
        setCleanArenas(data.data);
      })
      .catch(err => console.log("Error getting Arena data: ", err));
  }, []);

  function handleBossArena () {
    const bossArena = cleanArenas.find(arena => arena.name === 'Boss');
    return bossArena;
  }

  return { arenas, setArenas, arena, setArena, cleanArenas, handleBossArena };
}



