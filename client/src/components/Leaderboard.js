import React, { useEffect } from 'react';
import useLeaders from '../hooks/useLeaders';

const Leaderboard = (props) => {

  console.log('Rendering leaderboard');

  const leaderStats = props.leaders.map(leader => {
    return (
      <tr>
        <td>{leader.player_name}</td>
        <td>{leader.score}</td>
      </tr>
    )
  });

  return (<table>
    <thead>
      <tr>
        <th>Player</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      {leaderStats}
    </tbody>
  </table>);
};

export default Leaderboard;