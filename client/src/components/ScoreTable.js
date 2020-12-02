import React from 'react';

const ScoreTable = (props) => {
  return (
    <table>
      <thead></thead>
      <tbody>
        <tr>
          <td>Base Score: </td>
          <td>{props.baseScore}</td>
        </tr>
        <tr>
          <td>Speed Bonus: </td>
          <td title={`You took ${props.player_time} to complete a level where the benchmark time was ${props.par_time}`}>{props.speedBonus}x</td>
        </tr>
        <tr>
          <td>This round you earned:</td>
          <td>{props.lastResult} points!</td>
        </tr>
      </tbody>
    </table>);
};

export default ScoreTable;