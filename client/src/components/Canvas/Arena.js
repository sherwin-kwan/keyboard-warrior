// Libraries
import React, { useState, useEffect } from "react";
import axios from 'axios';

// Components
import HealthBar from '../HealthBar';
import Avatar from '../Avatar';
import PlayerActionList from '../PlayerActionList';
import ChallengerActionList from '../ChallengerActionList';
import TextInput from '../TextInput';

function Arena(props) {
  // States
  const [words, setWords] = useState([]);
  const [playerActions, setPlayerActions] = useState([]);
  
  // Helper functions
  const getRandWord = () => words[Math.floor(Math.random() * words.length)];
  const getNewWord = (action) => {
    // update playerAction state with a new word
    // clear text input
  }
  
  // Get word list and action list on load
  useEffect(() => {
    axios.defaults.baseURL = 'http://localhost:3001';

    Promise.all([
      axios.get('/api/words'),
      axios.get('/api/playerActions')
    ]).then(data => {
      setWords(data[0].data);
      setPlayerActions(data[1].data);
      console.log(data[1].data)
    }).then(() => {
      // Add a word to each action
      playerActions.forEach(action => action.word = getRandWord())
      console.log('playerActions', playerActions);
    }).catch(err => console.log("Error getting data: ", err));
  }, []);

  return (
    <>
      <h1>Arena</h1>
      {/* Player */}
      <HealthBar
        initialHealth="80"
      />
      <Avatar
        name='Your Name'
        height='250px'
        filename='/images/boss-spirit-fighter.png'
      />
      <PlayerActionList
        words={words}
        playerActions={playerActions}
        onNewWord={getRandWord}
      />
      <TextInput
        onMatch={getNewWord}
      />
      {/* Challenger */}
      <HealthBar
        initialHealth="100"
      />
      <Avatar
        name='Challenger'
        height='250px'
        filename='/images/boss-dragon-emporer.png'
      />
      <ChallengerActionList
        actions={{ 
          attack: 'attack-function.jpg',
          timeToAttack: 5
        }}
      />
    </>
  );
}

export default Arena;