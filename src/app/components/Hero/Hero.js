import React from "react";
import "./hero.css";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="heroSection container">
      <div className="heroLeft">
        <h1>
          Unleash Ultimate Performance for Your <br />{" "}
          <span className="textHighlight">Tata Car</span>{" "}
        </h1>
        <p className="shortDesc">
          Experience Quality Service with Genuine Parts and Skilled Technicians
        </p>
        <Button text="Contact Us" />
      </div>
      <div className="heroRight">Right Side</div>
    </section>
  );
};

export default Hero;
