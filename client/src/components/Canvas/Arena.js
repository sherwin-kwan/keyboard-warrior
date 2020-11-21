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

  console.log('RENDERING');

  // States
  const [words, setWords] = useState([]);
  const [playerActions, setPlayerActions] = useState([]);
  const [playerHealth, setPlayerHealth] = useState(props.initialPlayerHealth);
  const [challengerHealth, setChallengerHealth] = useState(props.challengerHealth);

  // Helper functions
  const getRandWord = () => words[Math.floor(Math.random() * words.length)];
  const getNewWord = (action) => {
    // update playerAction state with a new word
    // clear text input
  };
  const playerDamaged = (hp) => {
    if (playerHealth > hp) {
      console.log("PLAYER DAMAGED!", hp);
      setPlayerHealth(prev => prev - hp);
    } else {
      setPlayerHealth(0);
      console.log('PLAYER DEFEATED');
      setTimeout(() => {
        props.setMode("OUTCOME");
      }, 3000);
    }
  };
  const challengerDamaged = (hp) => {
    if (challengerHealth > hp) {
      console.log("CHALLENGER DAMAGED!", hp);
      setChallengerHealth(prev => prev - hp);
    } else {
      setChallengerHealth(0);
      console.log('CHALLENGER DEFEATED');
      setTimeout(() => {
        props.setMode("OUTCOME");
      }, 3000);
    }
  };

  // Timings for the challenger's attacks
  const milliseconds = 1000;
  const [challengerTimer, setChallengerTimer] = useState(20);

  // Use a useEffect to prevent looping (otherwise, every time interval is set, the re-render causes a second timer to be started, etc.)
  useEffect(() => {
    const interval = setInterval(() => {
      if (challengerTimer == 1) {
        setChallengerTimer(20);
        console.log('CHALLENGER LAUNCHED AN ATTACK');
        // We would eventually put a function for the challenger to attack here
      } else {
        setChallengerTimer(prev => prev - 1);
        console.log(`CHALLENGER TIMER SET TO ${challengerTimer}`)
      }
    }, milliseconds);
    return () => clearInterval(interval);
  }, [challengerTimer]);
  console.log('playerActions', playerActions);

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
        initialHealth={playerHealth}
        onClick={() => playerDamaged(10)}
      />
      <Avatar
        name='Your Name'
        height='250px'
        filename='/images/boss-spirit-fighter.png'
      />
      <PlayerActionList
        words={words}
        playerActions={playerActions}
      />
      <TextInput
        onMatch={getNewWord}
      />
      {/* Challenger */}
      <HealthBar
        initialHealth={challengerHealth}
        onClick={() => challengerDamaged(10)}
      />
      <Avatar
        name='Challenger'
        height='250px'
        filename='/images/boss-dragon-emperor.png'
      />
      <ChallengerActionList
        actions={{
          attack: 'attack-function.jpg',
          timeToAttack: 5
        }}
        duration={milliseconds}
        percentage={challengerTimer / 20 * 100}
      />
    </>
  );
}

export default Arena;