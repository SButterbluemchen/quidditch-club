import React from 'react';

import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import ArrowToBeginning from './ArrowToBeginning';
// import { GiOwl } from 'react-icons/fa';
// import { SiTinyletter } from 'react-icons/fa';
// import { GiWizardStaff } from 'react-icons/fa';
// import { GiSnitchQuidditchBall } from 'react-icons/fa';
// import { IoIosMegaphone } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer-container container">
      <ArrowToBeginning />
      <section className="footer-columns">
        <article className="footer-columns-model">
          {/* <img src='logo-quidditch-gold.png'/> */}
          <h4 className="footer-titles">QUIDDITCH CLUB</h4>
          <article className="footer-texte">
              Nous accueillons les enfants &apos;sorciers&apos; et &apos;moldus&apos; à suivre des cours de Quidditch. 
              Des matchs préparatoires pour la Coupe des 4 maisons sont organisés régulièrement.
          </article>
        </article>
        <article className="footer-columns-model">
          <h4 className="footer-titles">Vie du Club</h4>
          <article className="footer-texte">
            <ul className="footer-li">
              <li>Histoire</li>
              <li>Horaires et visites</li>
              <li>Conditions d&apos;admission</li>
              <li>Formulaire d&apos;inscription</li>
            </ul>
          </article>
        </article>
        <article className="footer-columns-model">
          <h4 className="footer-titles">Matchs et membres</h4>
          <article className="footer-texte">
            <ul className="footer-li">
              <li>Equipes</li>
              <li>Classement des meilleurs joueurs</li>
              <li>Equipement</li>
              <li>Evénements sportifs</li>
              <li>Coupe des 4 Maisons</li>
            </ul>
          </article>
        </article>
        <article className="footer-columns-model">
          <h4 className="footer-titles">Nous suivre</h4>
          <article className="footer-medias">
            <Link to='<FaFacebook />' className='footer-FaFacebook footer-pictos-gold' alt="Facebook Sorcier">
              <FaFacebook />
            </Link>
            <Link to='<FaInstagram />' className='footer-FaInstagram footer-pictos-gold' alt="Instagram Sorcier">
              <FaInstagram />
            </Link>
          </article>
          <h4 className="footer-titles">Nous contacter</h4>
          <article className="footer-texte">
            <ul className="footer-li">
              <li>Err&apos;Owl mail Ltd</li>
              <li>Beuglante Corp.</li>
            </ul>
          </article>
        </article>
      </section>
      <section className="home-subtitles2">
        <p className="footer-end">2022 - Team Quidditch Club / Mentions légales</p>
      </section>
    </div>
  );
}
