import React from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
// import {useState} from 'react';

export default function Players() {
  const harryPotter = {
    name: 'Harry Potter',
    alternate_names: [],
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
    dateOfBirth: '31-07-1980',
    yearOfBirth: 1980,
    wizard: true,
    ancestry: 'half-blood',
    eyeColour: 'green',
    hairColour: 'black',
    wand: {
      wood: 'holly',
      core: 'phoenix feather',
      length: 11,
    },
    patronus: 'stag',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Daniel Radcliffe',
    alternate_actors: [],
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/harry.jpg',
  };

  return (
    <section className="page-players">
      <Navbar />
      <h2>Notre équipe de Quidditch</h2>
      <h3>Attrapeur</h3>
      <article className='card-section-players'>
        <Card info={harryPotter} />
        <Card
          info={{
            name: 'Hermione Granger',
            alternate_names: [],
            species: 'human',
            gender: 'female',
            house: 'Gryffindor',
            dateOfBirth: '19-09-1979',
            yearOfBirth: 1979,
            wizard: true,
            ancestry: 'muggleborn',
            eyeColour: 'brown',
            hairColour: 'brown',
            wand: {
              wood: 'vine',
              core: 'dragon heartstring',
              length: '',
            },
            patronus: 'otter',
            hogwartsStudent: true,
            hogwartsStaff: false,
            actor: 'Emma Watson',
            alternate_actors: [],
            alive: true,
            image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
          }}
        />
      </article>
    </section>
  );
}
