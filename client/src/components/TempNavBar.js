import React from 'react';

const TempNavBar = (props) => {
  return (
    <>
    <button onClick={() => { props.onClick("START") }}>To Start</button>
      <button onClick={() => { props.onClick("MAP") }}>To Map</button>
      <button onClick={() => { props.onClick("ARENA") }}>To Arena</button>
      <button onClick={() => { props.onClick("OUTCOME") }}>To Outcome</button>
    </>
  );
};

export default TempNavBar;