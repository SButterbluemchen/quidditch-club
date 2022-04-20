import React from 'react';

const YoutubePitch = (props) => {
  return (
    <div className='home-youtube-container'>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/clqPPWDUe_U" 
        title="Quidditch Training" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>

    </div>
  );
};

export default YoutubePitch;