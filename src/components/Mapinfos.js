

export default function Mapinfos() {


    return (
      <div className="home-map">
        <iframe src="https://www.google.com/maps/d/embed?mid=1nCg4woyEPS7X9DbT4zUBLG2KhA9clNQb&ehbc=2E312F" width="640" height="480"></iframe>
        <section>
          <article>
            <h5 className="home-subtitles">Venir au Quidditch Club</h5>
            <p className="home-map-column">
              <h5 className="home-map-subtitles">TRAIN</h5>
              <ul>
                <li>De Paddington à Poudlard Station</li>
                <li>Prendre le Poudlard Express voie 9 3/4 très exactement à 11h !</li>
              </ul>
            </p>
            <p className="home-map-column">
              <h5 className="home-map-subtitles">VOITURE</h5>
              <ul>
                <li>Direction Hogwarts Castle</li>
                <li>Faire attention au Saule Cogneur en atterrissant</li>
              </ul>
            </p>
            <p className="home-map-column">
              <h5 className="home-map-subtitles">SOMBRAL</h5>
              <ul>
                <li>Disponible près de la gare Hogwarts Station</li>
                <li>Les charrettes prennent maximum 5 personnes.</li>
              </ul>
            </p>
          </article>

        </section>
        <section>
          <h5 className="home-subtitles">Horaires</h5>
          <p className="home-map-column">
            <ul className="home-map-list">
              <li>Du lundi au vendredi : de 08:30 am - 12:00 am / 13:30 pm - 18:00 pm</li>
              <li>Le samedi : de 09:00 am - 12:00 am</li>
            </ul>
          </p>
          <h5 className="home-subtitles">Visites</h5>
            <p className="home-map-alinea">Visites des familles le mercredi après-midi ou samedi matin.</p>
            <p className="home-map-list">Sur rendez-vous auprès de <span className="linkme2">Miss Pélagie Mortefeuille</span>.</p>
        </section>
      </div>
    );
  }