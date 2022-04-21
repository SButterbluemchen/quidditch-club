import React from 'react';

export default function Events() {
  return (
    <div className="container">
      <section>
        <article className="home-titles">
          <h2>Actualités du Club</h2>
        </article>
      </section>
      <section className="events-cards">
        <article className="events-cards-actu">
          <h4 className="home-subtitles">EVENEMENT DE LA SEMAINE</h4>
          <article>
            <iframe className="events-video-resize" src="https://www.youtube.com/embed/wINXs3hwwQg" title="Match Gryffindor/Slytherin" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </article>
          <p className="home-subtitles2">Revivez le match Gryffindor/Slytherin</p>
        </article>
        <article className="events-cards-actu">
          <h4 className="home-subtitles">TRICHE OU PAS TRICHE ?!</h4>
          <article>
            <iframe className="events-video-resize" src="https://www.youtube.com/embed/nXBnwMjhuIY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </article>
          <p className="home-subtitles2">Le débat de la semaine : l&apos;arbitrage était-il juste ?</p>
        </article>  
      </section>
    </div>
  );
}