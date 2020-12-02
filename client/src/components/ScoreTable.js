import React from 'react';

const ScoreTable = (props) => {
  return (
    <table>
      <thead></thead>
      <tbody>
        <tr>
          <td>Base Score: </td>
          <td>{props.result.baseScore}</td>
        </tr>
        <tr title={`You took ${props.result.player_time} seconds to complete a level where the benchmark time was ${props.result.par_time} s`}>
          <td>Speed Bonus: </td>
          <td>{props.result.speedBonus}x</td>
        </tr>
        <tr>
          <td>This round you earned:</td>
          <td>{props.result.lastResult} points!</td>
        </tr>
      </tbody>
    </table>);
};

export default ScoreTable;