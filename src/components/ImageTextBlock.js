import React from 'react';

const ImageTextBlock = (props) => {
  return (
    <section>
      {props.sectionTitle  && <h2>{props.sectionTitle}</h2>}
      <article className="image-text-block">
        <figure>
          <img src={props.image} alt="photo-stade" />
        </figure>
        <article className={props.articleClassName}>
          <h4>{props.title}</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in quasi earum dolorem delectus mollitia? Minima odit alias rerum dicta vel ut dolorum totam praesentium quisquam, ea temporibus laboriosam non!</p>
        </article>
      </article>
    </section>
  );
};

export default ImageTextBlock;