// Libraries
import React, { useState } from "react";

// Components
import HealthBar from '../HealthBar';
import Avatar from '../Avatar';
import PlayerActionList from '../PlayerActionList';
import ChallengerActionList from '../ChallengerActionList';
import TextInput from '../TextInput';

function Arena(props) {
  // States
  const [words, setWords] = useState(["army", "dogs", "tree", "girl", "true", "pure", "area", "test", "hand", "door"]);
  const [playerHealth, setPlayerHealth] = useState(props.initialPlayerHealth);
  const [challengerHealth, setChallengerHealth] = useState(props.challengerHealth);
  const [playerActions, setPlayerActions] = useState([
    { name: 'attack', icon: '' },
    { name: 'defend', icon: '' },
    { name: 'heal', icon: '' }
  ]);
  const [input, setInput] = useState('');
  
  // Helper functions
  const getRandWord = () => words[Math.floor(Math.random() * words.length)];
  const playerDamaged = (hp) => {
    console.log("PLAYER DAMAGED!", hp);
    setPlayerHealth(prev => prev - hp);
  };
  const challengerDamaged = (hp) => {
    console.log("CHALLENGER DAMAGED!", hp);
    setChallengerHealth(prev => prev - hp);
  }

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
        onNewWord={getRandWord}
      />
      <TextInput 
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      {/* Challenger */}
      <HealthBar
        initialHealth={challengerHealth}
        onClick={() => challengerDamaged(10)}
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