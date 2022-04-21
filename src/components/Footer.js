import React from 'react';

import { Link } from 'react-router-dom';
import LogoQuidditchGold from './img/logo-quidditch-gold.png';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GiOwl } from 'react-icons/gi';
import { SiTinyletter } from 'react-icons/si';
import { GiWizardStaff } from 'react-icons/gi';
import { GiSnitchQuidditchBall } from 'react-icons/gi';
import { IoIosMegaphone } from 'react-icons/io';


export default function Footer() {


    return () => {
      <div className="footer-container">
        <section className="footer-columns">
          <article className="footer-columns-model">
            <Link
                width="35%"
                height="35%"
                src={LogoQuidditchGold}
                frameborder="0"
                padding="0"
            ></Link>
            <h3 className="footer-titles">QUIDDITCH CLUB</h3>
            <article className="footer-texte">
                Nous accueillons les enfants "sorciers" et "moldus" à suivre des cours de Quidditch. 
                Des matchs préparatoires pour la Coupe des 4 maisons sont organisés régulièrement.
            </article>
          </article>

          <article className="footer-columns-model">
            <h3 className="footer-titles footer-pictos-gold"><GiWizardStaff />Vie du Club</h3>
            <article className="footer-texte">
                <ul className="footer-li">
                    <li>Histoire</li>
                    <li>Horaires et visites</li>
                    <li>Conditions d admission</li>
                    <li>Formulaire d inscription</li>
                </ul>
            </article>
          </article>

          <article className="footer-columns-model">
            <h3 className="footer-titles footer-pictos-gold"><GiSnitchQuidditchBall />Matchs et membres</h3>
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
            <h3 className="footer-titles">Nous suivre</h3>
            <article class="footer-medias">
              <Link to='<FaFacebook />' className='footer-FaFacebook' alt="Facebook Sorcier">
                <FaFacebook />
              </Link>
              <Link to='<FaInstagram />' className='footer-FaInstagram' alt="Instagram Sorcier">
                <FaInstagram />
              </Link>
        </article>
            <h3 className="footer-titles"><IoIosMegaphone />Nous contacter</h3>
            <article className="footer-texte">
                <ul className="footer-li">
                    <li><GiOwl />Err'Owl mail Ltd</li>
                    <li><SiTinyletter />Beuglante Corp.</li>
                </ul>
            </article>
          </article>

        </section>
        <section className="home-subtitles2">
            <p className="footer-end">
                2022 - Team Quidditch Club / Mentions légales
            </p>
        </section>
        
      </div>
    
 }
}