// Libraries
import React from "react";
import SkillBar from 'react-skillbars';

// Components
import ChallengerAction from './ChallengerAction';

function ChallengerActionList(props) {
  return (
    <>
      <h1>ChallengerActionList</h1>
      {/* This value would be passed from the state?? Or through a setInterval of some kind to update 50 times a second? */}
      <img src={props.attack} />
      <SkillBar 
          animationDelay={0} 
          animationDuration={100} 
          skills={[{type: 'Attack Timer', level: 60}]}/>
    </>
  );
}

export default ChallengerActionList;