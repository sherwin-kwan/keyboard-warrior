import React from 'react';

const Leaderboard = (props) => {


  const leaderStats = props.leaders.map(leader => {
    return (
      <tr>
        <td>{leader.player_name}</td>
        <td>{leader.score}</td>
      </tr>
    )
  });

  return (
    <table className="leaderboard">
      <thead>
        <tr>
          <th>Player</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {leaderStats}
      </tbody>
    </table>
  );
};

export default Leaderboard;