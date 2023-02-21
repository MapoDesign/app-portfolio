import React from "react";
import "./Hero.css";
import backImage from "../../assets/images/home-hero.jpg";

function Hero({ children, img, disableOverlay }) {
  const image = img ? img : backImage;

  return (
    <div
      className="hero-img-container"
      style={{
        background: `url(${image}`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={`${!disableOverlay ? "hero-overlay" : ""}`}>
        <div className="container hero-container">{children}</div>
      </div>
    </div>
  );
}

export default Hero;
