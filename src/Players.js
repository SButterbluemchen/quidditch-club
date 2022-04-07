import Navbar from './components/Navbar';
import CardSection from './components/CardSection';
import React, {useEffect, useState} from 'react';

export default function Players() {

  const [isLoading, setIsLoading] = useState(true);
  const [playerGroups, setPlayerGroups] = useState([]);

  const token = '7fb39549098e45b77abd3789b342e43e15d50e2e1681ccc2a5a349cc3f168f2791ee3a327a9db867d9248ca4225f3ef92eb9a2554894b692c6b9842ac555bce9b2c70924a752605a7f09876df23df3aadf46a97c6012d0eb994bbe8600f456dd40ac152ec3073eed375bba4a6fe38391c846591e2d2a01171dc3f86fc48a5cdf';
 
  useEffect(() => {
    const query = 'populate=%2A';
    fetch(`http://localhost:1337/api/players?${query}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'Application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => { 
        const allPlayerGroups = getPlayerGroups(data.data);

        setPlayerGroups(allPlayerGroups);
        setIsLoading(false);
      });
  }, []);

  function getPlayerGroups(players) {
    const groupedPlayers = groupBy(
      players,
      (player) => player.attributes.position,
    );

    const allPlayerGroups = [];

    groupedPlayers.forEach((element, key) => {
      allPlayerGroups.push({ position: key, players: element });
    });
    return allPlayerGroups;
  }

  function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

  return (
    <section className="page-players">
      <Navbar />
      <h2>Notre équipe de Quidditch</h2>
      {isLoading ? 'Loading...' : playerGroups.map(playerGroup => <CardSection key={playerGroup.position} position={playerGroup.position} players={playerGroup.players}/>)};
      {/* <div className="page-players-div">
      </div> */}
    </section>
  );
}
