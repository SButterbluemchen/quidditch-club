import React from 'react';

const RankingColumn = () => {
  return (
    <section className="ranking-column">
      <h2>Ranking 2022</h2>
      <table>
        <tr>
          <th>Rang</th>
          <th>Equippe</th>
          <th>MJ</th>
          <th>MG</th>
          <th>MP</th>
          <th>Pt</th>
        </tr>
        <tr>
          <td>1</td>
          <td><img src="/logo-quidditch-white.png" alt="logo poudelard" className="ranking-logo"/>Poudlard Phoenixs</td>
          <td>22</td>
          <td>18</td>
          <td>2</td>
          <td>48</td>
        </tr>
      </table>
    </section>
  );
};

export default RankingColumn;