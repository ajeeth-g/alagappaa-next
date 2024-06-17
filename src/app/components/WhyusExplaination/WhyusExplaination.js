import React from "react";
import Image from "next/image";
import "./whyusExplaination.css";

const WhyusExplaination = ({ image, title, description }) => {
  return (
    <div className="explanation">
      <Image
        src={image}
        width={56}
        height={56}
        alt="Explanation image"
        className="companyLogo"
      />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WhyusExplaination;
