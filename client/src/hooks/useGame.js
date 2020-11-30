import { useState } from "react";
import axios from 'axios';

export default function useGame() {

  const [game, setGame] = useState({});
  const [score, setScore] = useState(0);
  const [lastResult, setLastResult] = useState(0);

  function startGame(name, setMode) {

    const newGame = { player_name: name }

    setMode("TRANSITION");
    axios.post('/api/games', newGame)
      .then(data => {
        // The API will send back the ID returned from the database. This can be stored in state
        const newGameId = data.data;
        setGame((prev) => {
          return {
            ...prev,
            id: newGameId
          }
        });
        setMode("MAP");
      })
      .catch(err => console.log("Error posting Game data: ", err));

  }

  async function updateScore() {
    try {
      const res = await axios.get(`/api/game/${game.id}`);
      setScore(Number(res.data[0].score));
    } catch (err) {
      console.log(err.message);
      setScore(NaN); // Signifies that score could not be found
    }
  }

  return { game, setGame, startGame, score, setScore, updateScore, lastResult, setLastResult };
}