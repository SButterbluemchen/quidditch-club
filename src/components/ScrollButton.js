import React, { useState, useEffect } from 'react';
import snitch from '../media/goldvif.png';
import arrow from '../media/topbutton.png';

const ScrollButton = () => {

  const [showTopBtn, setShowTopBtn] = useState(() => false);
  const [over, setOver] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
    setOver(false);
  };

  return (
    <div className="top-button-container">
      {showTopBtn && 
        <div className="top-button" onClick={goToTop} onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)}>
          <img src={over ? arrow : snitch} />
        </div>}
    </div>
  );
};

export default ScrollButton;