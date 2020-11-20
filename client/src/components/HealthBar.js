// Libraries
import React from "react";
import Bar from 'react-bars';

function HealthBar(props) {
  return (
    <>
      <h1>HealthBar</h1>
      <Bar data={[{label: 'Health', value: props.initialHealth}]} />
    </>
  );
}

export default HealthBar;