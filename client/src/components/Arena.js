// Libraries
import React from "react";

// Components
import HealthBar from './HealthBar';
import Avatar from './Avatar';
import PlayerActionList from './PlayerActionList';
import ChallengerActionList from './ChallengerActionList';
import TextInput from './TextInput';

function Arena(props) {
  // Hardcoded data
  const words = ["army", "dogs", "tree", "girl", "true", "pure", "area", "test", "hand", "door"];
  const playerActions = [
    { name: 'attack', icon: '' },
    { name: 'defend', icon: '' },
    { name: 'heal', icon: '' }
  ];
  
  // Helper functions
  const getRandWord = () => words[Math.floor(Math.random() * words.length)];

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
        value=''
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