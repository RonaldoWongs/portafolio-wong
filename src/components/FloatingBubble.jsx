import React, { useState } from 'react';
import './FloatingBubble.css';

function FloatingBubble() {
  const [isBubbleOpen, setIsBubbleOpen] = useState(false);

  const toggleBubble = () => {
    setIsBubbleOpen(!isBubbleOpen);
  };

  return (
    <div className="floating-bubble">
      <div className={`bubble-icon ${isBubbleOpen ? 'active' : ''}`} onClick={toggleBubble}>
        <i className="bx bx-share-alt"></i>
      </div>
      {isBubbleOpen && (
        <div className="social-links">
          <a href="https://www.linkedin.com/in/tu-linkedin" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          {/* Agrega otros enlaces a tus redes sociales aquí */}
        </div>
      )}
    </div>
  );
}

export default FloatingBubble;
