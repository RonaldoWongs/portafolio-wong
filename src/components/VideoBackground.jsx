import React from 'react';
import red from '../../video/red.mp4';

function VideoBackground() {
  return (
    <video autoPlay loop muted className="video-background">
      <source src={red} type="video/mp4" />
      {/* Add additional video sources for browsers that do not support MP4 format */}
    </video>
  );
}

export default VideoBackground;
