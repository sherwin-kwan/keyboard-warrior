// Libraries
import React from "react";
import SkillBar from 'react-skillbars';

function HealthBar(props) {
  const colors = {
    "bar": "#00E436",
    "title": {
      "text": "#000",
      "background": "#fff"
    }
  };

  return (
    <>
      <img src="/images/red-cross.png" alt="Health" onClick={() => props.onClick(10)} />
      <SkillBar animationDelay={0} animationDuration={200} height={'1.5rem'} skills={[{type: 'Health', level: props.health}]} colors={colors}/>
    </>
  );
}

export default HealthBar;