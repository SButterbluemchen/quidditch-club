import React from 'react';

const RankingColumn = (props) => {
  return (
    <tr>
      <td>{props.rankingInfo.rank}</td>
      <td className="ranking-team">{props.rankingInfo.team}</td>
      <td>{props.rankingInfo.matchesPlayed}</td>
      <td>{props.rankingInfo.matchesWon}</td>
      <td>{props.rankingInfo.matchesLost}</td>
      <td>{props.rankingInfo.points}</td>
    </tr>
  );
};

export default RankingColumn;