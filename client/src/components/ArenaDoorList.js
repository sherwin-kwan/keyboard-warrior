// Libraries
import React from "react";

// Components
import ArenaDoor from './ArenaDoor';

function ArenaDoorList(props) {
  const doors = props.arenas.map((arena) => {
    return <ArenaDoor 
      key={arena.name}
      name={arena.name}
    />
  })

  return (
    <>
      <h1>ArenaDoorList</h1>
      {doors}
    </>
  );
}

export default ArenaDoorList;