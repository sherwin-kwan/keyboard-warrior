// Libraries
import React from "react";
import Bar from 'react-bars';

// Components
import ChallengerAction from './ChallengerAction';

function ChallengerActionList(props) {
  return (
    <>
      <h1>ChallengerActionList</h1>
      {/* This value would be passed from the state?? Or through a setInterval of some kind to update 50 times a second? */}
      <img src={props.attack} />
      <Bar data={[{value: 60}]}/>
    </>
  );
}

export default ChallengerActionList;