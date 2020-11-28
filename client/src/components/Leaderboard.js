import React, { useEffect } from 'react';
import axios from 'axios';

const Leaderboard = (props) => {

  const leaderStats = await getLeaders();
  console.log('Stats are: ', leaderStats);

  return (<table>
    <thead>
      <tr>
        <th>Player</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Sherwin</td>
        <td>4000</td>
      </tr>
      <tr>
        <td>Jillian</td>
        <td>3999</td>
      </tr>
      <tr>
        <td>Helen</td>
        <td>3998</td>
      </tr>
      <tr>
        <td>Rick Astley</td>
        <td>30</td>
      </tr>
      <tr>
        <td>You!!</td>
        <td>20</td>
      </tr>
    </tbody>
  </table>);
};

export default Leaderboard;