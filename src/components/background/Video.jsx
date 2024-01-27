// VideoBackground.js
import React from "react";
import "./video.css"; // Import your CSS file

const Video = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline className="video-element">
        <source src="assets/final.mp4" type="video/mp4" />
        {/* Add additional source elements for different video formats if needed */}
      </video>
    </div>
  );
};

export default Video;
