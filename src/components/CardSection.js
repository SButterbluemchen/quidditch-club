import React from 'react';
import Card from './Card';
import {useEffect, useState} from 'react';

const CardSection = (props) => {

  const [isLoading, setIsLoading] = useState(true);
  const [players, setPlayers] = useState(null);

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
        setPlayers(data.data);
        setIsLoading(false);
      });
  }, []);

  // const harryPotter = {
  //   'data': [
  //     {
  //       'id': 1,
  //       'attributes': {
  //         'number': 1,
  //         'firstName': 'Harry',
  //         'lastName': 'Potter',
  //         'position': 'Attrapeur',
  //         'broom': 'Firebolt 5000',
  //         'home': 'Gryffondor',
  // "image": {
  //   "data": {
  //       "id": 1,
  //       "attributes": {
  //           "name": "harryPotter.jpeg",
  //           "alternativeText": "harryPotter.jpeg",
  //           "caption": "harryPotter.jpeg",
  //           "width": 163,
  //           "height": 227,
  //           "formats": {
  //               "thumbnail": {
  //                   "name": "thumbnail_harryPotter.jpeg",
  //                   "hash": "thumbnail_harry_Potter_eca7d93075",
  //                   "ext": ".jpeg",
  //                   "mime": "image/jpeg",
  //                   "path": null,
  //                   "width": 112,
  //                   "height": 156,
  //                   "size": 4.33,
  //                   "url": "/uploads/thumbnail_harry_Potter_eca7d93075.jpeg"
  //               }
  //           },
  //           "hash": "harry_Potter_eca7d93075",
  //           "ext": ".jpeg",
  //           "mime": "image/jpeg",
  //           "size": 7.96,
  //           "url": "/uploads/harry_Potter_eca7d93075.jpeg",
  //           "previewUrl": null,
  //           "provider": "local",
  //           "provider_metadata": null,
  //           "createdAt": "2022-04-06T14:42:46.871Z",
  //           "updatedAt": "2022-04-06T14:42:46.871Z"
  // }
  //       }
  //     }
  //   ]
  // };
      

  return (
    <section className="card-section">
      <h3>{props.position}</h3>
      <article className='card-section-players'>
        {isLoading ? 'Loading...' : players.map(player => {
          if (player.attributes.position === props.position) {
            return <Card key={player.id} infos={player.attributes} />;
          }
        }
        )}
      </article>
    </section>
  );
};

export default CardSection;