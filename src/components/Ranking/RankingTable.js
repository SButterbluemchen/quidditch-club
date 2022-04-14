import React, { useState, useEffect} from 'react';
import RankingColumn from './RankingColumn';

const RankingTable = () => {

  const [rankingData, setRankingData] = useState([]);

  // API VERSION
  // function getRankingData() {
  //   fetch('/rankingdata.json',
  //     {
  //       headers : { 
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       }
  //     }
  //   )
  //     .then(result => result.json())
  //     .then(data => {console.log('result', data);})
  //     .catch(error => {console.log('error', error);});
  // }
  // getRankingData();

  useEffect(() => {
    fetch('/rankingdata.json')
      .then(res => res.json())
      .then(data => setRankingData(data.data));
  }, []);

  return (
    <>
      <h2>Ranking 2022</h2>
      <article className="ranking-column">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Equippe</th>
              <th>MJ</th>
              <th>MG</th>
              <th>MP</th>
              <th>Point</th>
            </tr>
          </thead>
          <tbody>
            {rankingData.map(dataItem => <RankingColumn key={dataItem.id} rankingInfo={dataItem.attributes} />)}
          </tbody>
        </table>
        <p className="rankingCaptions">*MJ: matchs joués, MG: matchs gagnés, MP: matchs perdus</p>
      </article>
    </>
  );
};

export default RankingTable;
                 