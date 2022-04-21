import React from 'react';

export default function HomeClub() {
  return (
    <div className="club">
      <h1>Sélection de la Coupe des Maisons</h1>
      <section className="club-cards">
        <article className="evenements">
          <a href="informations#inscription-form"><h3>Vie du Club</h3></a>
        </article>
        <article className="evenements">
          <a href="#events"><h3>Evenements</h3></a>
        </article>
        <article className="evenements">
          <a href="/players"><h3>Membres</h3></a>
        </article>
        <article className="evenements">
          <a href="contact"><h3>Contact</h3></a>
        </article>
      </section>
    </div>
  );
}
