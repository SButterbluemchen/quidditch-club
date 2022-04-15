import React, { useState } from 'react';
import playerData from '../components/PlayerCards/playerData.json';

const Searchbar = () => {

  const [query, setQuery] = useState('');

  return (
    <section className='searchbar-container'>
      <div>
        <input placeholder="Je cherche ..." onChange={event => setQuery(event.target.value)}/>
        {playerData.data.filter(player => {
          if (query === '') {
            return player;
          } else if (player.attributes.firstName.toLowerCase().includes(query.toLowerCase())) {
            return player;
          }
        }).map(player => 
          <li key={player.id}>{player.attributes.firstName}</li>)}
      </div>
    </section>
  );
};

export default Searchbar;