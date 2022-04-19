import React from 'react';

const YoutubeHistory = (props) => {
  return (
    <div className='history-youtube-test'>
      <iframe
        className="history-youtube-iframe"
        width="853"
        height="480"
        src={props.src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeHistory;
