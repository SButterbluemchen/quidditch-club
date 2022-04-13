import Navbar from './components/Navbar';
import CardSection from './components/PlayerCards/PlayerCardSection';
import React, {useEffect, useState} from 'react';
import PageTopFrames from './components/Frames/pageTopFrames';
import PageBottomFrames from './components/Frames/PageBottomFrames';

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

  // Get data from API and group OBJECTS in 1 OBJECT by position - using 'groupBy' function from below
  function getPlayerGroups(players) {
    const groupedPlayers = groupBy(
      players,
      (player) => player.attributes.position,
    );
    //result = Map(5) {'Attrapeur' => Array(2), 'Batteur' => Array(4), 'Poursuiveur' => Array(6), 'Gardien' => Array(2), 'Entraîneur' => Array(1)}
    // [[Entries]]
      // 0: {"Attrapeur" => Array(2)}
      // key: "Attrapeur"
      // value: (2) [{…}, {…}]
    // 1: {"Batteur" => Array(4)}
    // 2: {"Poursuiveur" => Array(6)}
    // 3: {"Gardien" => Array(2)}
    // 4: {"Entraîneur" => Array(1)}
    // size: 5
    //Prototype : Map

    //grouping function lists = players, key = position
    // This function is needed because it is an object, not an array !
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

    // Add player map objects into an ARRAY by position - 1 ARRAY per position
    //result = (5) [{…}, {…}, {…}, {…}, {…}]
    // 0:
    // players: (2) [{…}, {…}]
    // position: "Attrapeur"
    // [[Prototype]]: Object
    // 1: {position: 'Batteur', players: Array(4)}
    // 2: {position: 'Poursuiveur', players: Array(6)}
    // 3: {position: 'Gardien', players: Array(2)}
    // 4: {position: 'Entraîneur', players: Array(1)}
    // length: 5
    // [[Prototype]]: Array(0)
    const allPlayerGroups = [];

    groupedPlayers.forEach((element, key) => {
      allPlayerGroups.push({ position: key, players: element });
    });
    return allPlayerGroups;
  }

  return (
    <section className="page-players">
      <Navbar />
      <PageTopFrames />
      <h2>Notre équipe de Quidditch</h2>
      {isLoading ? 'Loading...' : playerGroups.map(playerGroup => <CardSection key={playerGroup.position} position={playerGroup.position} players={playerGroup.players}/>)};
      <PageBottomFrames />
    </section>
  );
}
