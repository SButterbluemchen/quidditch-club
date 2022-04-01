import React from 'react';
import Card from './components/Card';

export default function Members() {

  return (
    <section>
      <h2>Notre équipe de Quidditch</h2>
      <h4>Attrapeur</h4>
      <article className="card-section-players">
        <Card />
        <Card />
      </article>
    </section>
  );
}