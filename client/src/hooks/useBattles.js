// records battles completed

import { useState } from "react";

export default function useBattles() {

  const [battles, setBattles] = useState([]);
  const [currentBattle, setCurrentBattle] = useState({});

  function startBattle(gameId, arenaId) {
    const battle = {
      game_id: gameId,
      arena_id: arenaId,
      start_time: new Date()
    };
    setCurrentBattle(battle);  
  }

  function endBattle() {

  }

  return { startBattle, endBattle };
}
