import Navbar from './components/Navbar';
import CardSection from './components/PlayerCards/PlayerCardSection';
import React, {useEffect, useState} from 'react';
import PageTopFrames from './components/Frames/PageTopFrames';
import PageBottomFrames from './components/Frames/PageBottomFrames';
import { token } from './components/token';

export default function Players() {

  const [isLoading, setIsLoading] = useState(true);
  const [playerGroups, setPlayerGroups] = useState([]);
  const [allPlayers, setAllPlayers] = useState([]);

  const [query, setQuery] = useState('');
 
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
        setAllPlayers(data.data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setAllPlayersGroups();
  }, [allPlayers, query]);

  function setAllPlayersGroups() {
    const filteredPlayers = query.length > 0 ? allPlayers.filter(player => {
      if (query !== '' && player.attributes.firstName.toLowerCase().includes(query.toLowerCase()) || player.attributes.lastName.toLowerCase().includes(query.toLowerCase()) || player.attributes.broom.toLowerCase().includes(query.toLowerCase())) { 
        return player;
      }
    }
    ) : allPlayers;

    const allPlayerGroups = getPlayerGroups(filteredPlayers);
    setPlayerGroups(allPlayerGroups);
  }

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
    return allPlayerGroups.sort((a,b) => {
      let pa = a.position.toLowerCase(),
        pb = b.position.toLowerCase();
      if (pa < pb) {
        return -1;
      }
      else if (pa > pb) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <section className="page-background">
      <Navbar />
      <PageTopFrames />
      <Searchbar />
      <h2>Notre équipe de Quidditch</h2>
      <section className='searchbar-container'>
        <div>
          <input placeholder="Je cherche ..." onChange={event => setQuery(event.target.value)}/>
        </div>
      </section>
      {isLoading ? 'Loading...' : playerGroups.map(playerGroup => <CardSection key={playerGroup.position} position={playerGroup.position} players={playerGroup.players}/>)}
      <PageBottomFrames />
    </section>
  );
}