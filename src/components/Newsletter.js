import React from 'react';

export default function Newsletter() {


  return (
    <div className="abonnement">
      <article className="actunews">
        <p>Vous désirez suivre l&apos;actualité de notre club : abonnez-vous gratuitement !</p>
      </article>
      <section>
        <article className="newsletter-email">
          <input type="text" placeholder="Votre adresse mail..." name="mail" required></input>
          <button className="button-news">OK</button>
        </article>
      </section>
    </div>
  );
}