import React from 'react';

export default function Donuts() {
  return (
    <div className="container">
      <section className="home-titles">
        <h2>Sélection des meilleurs joueurs</h2>
      </section>
      <section className="donuts-container">
        <section className="donuts">
          <article>
            <ul className="chart-skills">
              <li>
                <span>Mickael</span>
              </li>
              <li>
                <span>Harry</span>
              </li>
              <li>
                <span>Marcus</span>
              </li>
              <li>
                <span>Peter</span>
              </li>
            </ul>
          </article>
        </section>
      </section>
    </div>
  );
}
