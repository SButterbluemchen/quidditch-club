import React from 'react';

export default function Newsletter() {


    return (
      <div className="abonnement">
        <article className="actunews">
            <h3>Vous désirez suivre l'actualité de notre club : abonnez-vous gratuitement !</h3>
        </article>
        <section>
          <article className="newsletter-email">
            <input type="text" placeholder="Votre adresse mail..." name="mail" required></input>
        
            <button class="button-news">OK</button>
        </article>
        </section>
        
        
      </div>
    );
  }