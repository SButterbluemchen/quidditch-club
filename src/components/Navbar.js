import React from 'react';
import { Menubar } from 'primereact/menubar';

export default function Navbar() {

  const items = [
    {
      label:'Informations'
    },
    {
      label:'Joueurs',
    },
    {
      label:'Histoire',
    },
    {
      label:'Contact',
    },
  ];

  return (
    <section className="navbar">
      <article>
        <figure>
          <img src='logo-quidditch-white.png'/>
        </figure>
        <h3>Quidditch Club</h3>
      </article>
      <Menubar model={items}/>
    </section>
  );
}