import React from 'react';
import line from '../../video/line.mp4';

function VideoBackground() {
  return (
    <video autoPlay loop muted className="video-background">
      <source src={line} type="video/mp4" />
      {/* Add additional video sources for browsers that do not support MP4 format */}
    </video>
  );
}

export default VideoBackground;
