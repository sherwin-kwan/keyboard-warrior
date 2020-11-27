// records battles completed

import { useState } from "react";
import axios from "axios";

export default function useBattles() {

  const [currentBattle, setCurrentBattle] = useState({});

  function startBattle(game_id, arena_id) {
    const battle = {
      game_id,
      arena_id,
      start_time: new Date()
    };
    console.log('battle', battle)
    setCurrentBattle(battle);  
  }

  function endBattle(win) {
    const battle = {
      ...currentBattle,
      win,
      end_time: new Date()
    };
    axios.post('/api/battles', battle)
      .then(() => setCurrentBattle(battle))
      .catch(err => console.log("Error Posting Battle:", err))
  }

  return { startBattle, endBattle, setCurrentBattle };
}
