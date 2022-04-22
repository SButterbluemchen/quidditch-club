import React from 'react';

import { Link } from 'react-router-dom';
import LogoQuidditchGold from './logo-quidditch-gold.png';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { GiOwl } from '@react-icons/all-files/gi/GiOwl';
import { SiTinyletter } from '@react-icons/all-files/si/SiTinyletter';
import { GiWizardStaff } from '@react-icons/all-files/gi/GiWizardStaff';
import { GiSnitchQuidditchBall } from '@react-icons/all-files/gi/GiSnitchQuidditchBall';
import { IoIosMegaphone } from '@react-icons/all-files/io/IoIosMegaphone';


export default function Footer() {
   return (
     <div className="footer-container">
       <section className="footer-columns">
         <article className="footer-columns-model">
           <figure
             width="35%"
             height="35%"
             src={LogoQuidditchGold}
             frameborder="0"
             padding="0"
           ><LogoQuidditchGold /></figure>
           <h3 className="footer-titles">QUIDDITCH CLUB</h3>
           <article className="footer-texte">
               Nous accueillons les enfants &apos;sorciers&apos; et &apos;moldus&apos; à suivre des cours de Quidditch. 
               Des matchs préparatoires pour la Coupe des 4 maisons sont organisés régulièrement.
           </article>
         </article>

         <article className="footer-columns-model">
           <h3 className="footer-titles footer-pictos-gold"><GiWizardStaff />Vie du Club</h3>
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
           <article className="footer-medias">
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
               <li><GiOwl />Err&apos;Owl mail Ltd</li>
               <li><SiTinyletter />Beuglante Corp.</li>
             </ul>
           </article>
         </article>

       </section>
       <section className="home-subtitles2">
         <p className="footer-end">2022 - Team Quidditch Club / Mentions légales</p>
       </section>
     </div>
   )
 }