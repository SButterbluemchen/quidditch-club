import React from 'react';
import { HomeClub } from './components/HomeClub'

export default function HomeClub() {
    
    
    return (
      <div className="club">
        <h3 className="home-heading">Sélection de la Coupe des Maisons</h3>
        <section className="club-cards">
          <article className="evenements">
            <h3>Vie du Club</h3>
        </article>

        <article className="evenements">
            <h3>Evenements</h3>
        </article>
        <article className="home-membres">
            <h3>Membres</h3>
        </article>
        <article className="evenements">
            <h3>Contact</h3>
        </article>
        </section>
        
      </div>
    );

    
 }