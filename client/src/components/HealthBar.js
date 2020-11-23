// Libraries
import React from "react";
import SkillBar from 'react-skillbars';
import './HealthBar.scss';

function HealthBar(props) {
  const colors = {
    "bar": "#00E436",
    "title": {
      "text": "#000",
      "background": "#fff"
    }
  };

  return (
    <div className="health-bar">
      <img src="/images/red-cross.png" alt="Health" onClick={() => props.onClick(10)} />
      <SkillBar animationDelay={0} animationDuration={200} height={'2rem'} skills={[{type: 'Health', level: props.health}]} colors={colors}/>
    </div>
  );
}

export default HealthBar;