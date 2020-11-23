// Libraries
import React from "react";
import SkillBar from 'react-skillbars';

// Components
import ChallengerAction from './ChallengerAction';

function ChallengerActionList(props) {
  // Sets the time until the next challenger attack in tenths of a second
  // Hard-coded to 2 seconds between attacks right now


  return (
    <>
      {/* This value would be passed from the state?? Or through a setInterval of some kind to update 50 times a second? */}
      <img src={props.attack} />
      <SkillBar 
          animationDelay={0} 
          animationDuration={props.duration} 
          skills={[{type: 'Attack Timer', level: props.percentage}]}/>
    </>
  );
}

export default ChallengerActionList;