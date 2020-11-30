// records battles completed

import { useState } from "react";
import axios from "axios";

export default function useBattles() {

  const [currentBattle, setCurrentBattle] = useState({});
  const [style, setStyle] = useState({ player: { attack: {}, heal: {} }, challenger: {} });

  function startBattle(game_id, arena_id) {
    const battle = {
      game_id,
      arena_id,
      start_time: new Date()
    };
    console.log('battle', battle)
    setCurrentBattle(battle);
  }

  async function endBattle(win) {
    const battle = {
      ...currentBattle,
      win,
      end_time: new Date()
    };
    try {
      const res = await axios.post('/api/battles', battle);
      setCurrentBattle(battle);
      return res.data.score;
    } catch (err) {
      console.log("Error Posting Battle:", err)
    }
  }

  function handleAttackAnimation(attacker, action) {
    const animation = {
      visibility: 'visible',
      animation: 'blink 1s steps(4, end) 0s infinite'
    };
    const hide = { visibility: 'hidden '};

    if (attacker === 'player') {
      setStyle(prev => {
        return { ...prev, [attacker]: { [action]: animation } };
      });
      return setTimeout(() => {
        setStyle(prev => {
          return { ...prev, [attacker]: { [action]: hide } };
        });
      }, 1000);
    } else {
      setStyle(prev => {
        return { ...prev, [attacker]: animation };
      });
      return setTimeout(() => {
        setStyle(prev => {
          return { ...prev, [attacker]: hide };
        });
      }, 1000);
    }
  }

  return { startBattle, endBattle, setCurrentBattle, style, handleAttackAnimation };
}
