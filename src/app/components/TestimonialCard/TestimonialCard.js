"use client";
import React from "react";
import "./testimonialCard.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const TestimonialCard = ({ name, review, rating }) => {
  // Function to render stars based on rating
  const renderStars = () => {
    const stars = [];
    let wholeStars = Math.floor(rating);
    let hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= wholeStars) {
        stars.push(<FaStar key={i} />);
      } else if (hasHalfStar && i === wholeStars + 1) {
        stars.push(<FaStarHalfAlt key={i} />);
        hasHalfStar = false;
      } else {
        stars.push(<FaStar key={i} className="emptyStar" />);
      }
    }
    return stars;
  };

  return (
    <div className="testimonialCard">
      <div className="customerDetails">
        <div className="testimonialName">
          <h3>{name}</h3>
          <div className="starIcons">{renderStars()}</div>
        </div>
      </div>
      <p >
        {review}
      </p>
    </div>
  );
};

export default TestimonialCard;
