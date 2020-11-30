import React from 'react';

const MuteButton = (props) => {

  const { music, setMusic } = props;

  return (
    <aside className="mute-music" >
      <img src={music ? "/images/unmute-music.png" : "/images/mute-music.png"}
        onClick={() => setMusic(prev => !prev)}
        alt={music ? "mute music" : "unmute music"}
      />
    </aside>
  )
};

export default MuteButton;