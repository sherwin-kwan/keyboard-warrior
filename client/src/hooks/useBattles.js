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
    return battle;
  }

  async function endBattle(win, inputBattle) {
    console.log('input battle is: ', inputBattle);
    const battle = {
      ...inputBattle,
      win,
      end_time: new Date()
    };
    try {
      console.log(`Battle is: ${battle}`);
      const res = await axios.post('/api/battles', battle);
      const outputBattle = {
        ...battle,
        score: res.data.score,
        time_seconds: res.data.time_seconds
      };
      return outputBattle;
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
      setTimeout(() => {
        setStyle(prev => {
          return { ...prev, [attacker]: { [action]: hide } };
        });
      }, 1000);
    } else {
      setStyle(prev => {
        return { ...prev, [attacker]: animation };
      });
      setTimeout(() => {
        setStyle(prev => {
          return { ...prev, [attacker]: hide };
        });
      }, 1000);
    }
  }

  return { startBattle, endBattle, currentBattle, setCurrentBattle, style, handleAttackAnimation };
}
