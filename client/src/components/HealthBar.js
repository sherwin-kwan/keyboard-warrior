// Libraries
import React from "react";
import SkillBar from 'react-skillbars';

function HealthBar(props) {
  return (
    <>
      <h1>HealthBar</h1>
      <SkillBar animationDelay={0} animationDuration={100} skills={[{level: props.initialHealth}]} />
    </>
  );
}

export default HealthBar;