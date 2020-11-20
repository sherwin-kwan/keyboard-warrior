// Libraries
import React from "react";

// Components
import HealthBar from './HealthBar';
import Avatar from './Avatar';
import PlayerActionList from './PlayerActionList';
import ChallengerActionList from './ChallengerActionList';
import TextInput from './TextInput';

function Arena(props) {
  return (
    <>
      <h1>Arena</h1>
      {/* Player */}
      <HealthBar
        maxHealth="100"
        initialHealth="90"
      />
      <Avatar
        name='Your Name'
        filename='/images/boss-spirit-fighter.png'
      />
      <PlayerActionList
        words={[]}
        actions={{ 
          attack: 'attack function',
          defend: 'defend function',
          heal: 'heal function'
        }}
      />
      {/* Challenger */}
      <HealthBar
        maxHealth="100"
        initialHealth="90"
      />
      <Avatar
        name='Challenger'
        filename='/images/boss-dragon-emperor.png'
      />
      <ChallengerActionList
        actions={{ 
          attack: 'attack function',
          timeToAttack: 5
        }}
      />
      <TextInput 
        value=''
      />
    </>
  );
}

export default Arena;