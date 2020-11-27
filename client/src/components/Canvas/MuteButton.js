import React from 'react';

const MuteButton = (props) => {

  return (
    <img className="mute-music" src="/images/unmute-music.png" onClick={() => {props.setMusic("OFF")}} alt="mute music"/>
  );
};

export default MuteButton;