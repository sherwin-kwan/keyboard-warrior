import { useState, useEffect } from "react";
import axios from 'axios';

export default function useGame() {

  const [game, setGame] = useState({})

  function startGame(name) {
    axios.defaults.baseURL = 'http://localhost:3001';

    axios.put('/api/games')
      .then(data => {
        setGame(
          {
            player_name: name
          }
        )
      })
      .catch(err => console.log("Error putsing Game data: ", err));
  }

  return { game, setGame };
}