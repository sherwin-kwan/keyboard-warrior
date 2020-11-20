// Libraries
import React from "react";

// Components
import ArenaDoor from './ArenaDoor';

function ArenaDoorList(props) {
  console.log('Arenas array should be here: ', props.arenas);
  const doors = props.arenas.map((arena) => {
    return <ArenaDoor 
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