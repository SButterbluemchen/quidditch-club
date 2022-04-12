import React from 'react';
import { useState, useEffect } from 'react';
import { Menubar } from 'primereact/menubar';

export default function Navbar() {

  const [windowWidth, setWindowWidth] = useState(()=> window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', watchWidth);
    //cleanup function
    return function() {
      window.removeEventListener('resize', watchWidth);
    };
  }, []);

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
    <section className="navbar container">
      <a href='/'>
        <article>
          <figure>
            <img src='logo-quidditch-white.png'/>
          </figure>
          {windowWidth >= 600 && <h3>Quidditch Club</h3>}
        </article>
      </a>
      <Menubar model={items}/>
    </section>
  );
}
