import React from "react";

import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video className="hero-video" src="/videos/DXC.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
    </div>
  );
}

export default HeroSection;
