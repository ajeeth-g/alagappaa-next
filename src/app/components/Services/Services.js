"use client";
import "./services.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useState } from "react";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle click on navigation dots
  const handleClickDot = (index) => {
    setCurrentIndex(index);
  };

  // Array of service titles (just for example, adjust as per your needs)
  const serviceTitles = [
    "Free Service",
    "Warranty Repair",
    "Paid Service",
    "Accidental Repair",
    "Annual Maintenance Contract",
    "Extended Warranty",
  ];

  // Calculate which service cards to display based on currentIndex
  const visibleServices = serviceTitles.slice(currentIndex, currentIndex + 5);

  // Generate dots for navigation
  const dots = [];
  for (let i = 0; i < Math.ceil(serviceTitles.length / 4); i++) {
    dots.push(
      <span
        key={i}
        className={`dot ${currentIndex === i * 5 ? "active" : ""}`}
        onClick={() => handleClickDot(i * 5)}
      />
    );
  }

  return (
    <section id="services" className="servicesSection container">
      <h2>
        Our Professional <br /> <span className="textHighlight">Services</span>
      </h2>
      <div className="serviceCardContainer">
        {visibleServices.map((title, index) => (
          <ServiceCard key={index} title={title} />
        ))}
      </div>
      <div className="dotsContainer">{dots}</div>
    </section>
  );
};

export default Services;
