import React from "react";
import "./banner.css";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <section className="bannerSection container">
      <div className="bannerImage">
        <img src="/BannerImage.png" alt="Make a Appointment Banner" />
        <div className="bannerContent">
          <h2>
            Ready to Schedule <br /> an appoinment?
          </h2>
          <p className="shortDesc">
            Contact us today to book your next service
          </p>
          <Button text="Make a Appointment" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
