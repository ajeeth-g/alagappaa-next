"use client"
import React, { useState, useEffect } from "react";
import "./showcase.css";
import Image from "next/image";

const Showcase = () => {
  const [selectedLocation, setSelectedLocation] = useState("Pollachi");
  const [isGalleryVisible, setIsGalleryVisible] = useState(true);

  // Function to handle location button clicks
  const handleLocationClick = (location) => {
    setIsGalleryVisible(false); // Start hiding gallery
    setTimeout(() => {
      setSelectedLocation(location);
      setIsGalleryVisible(true); // Show gallery after state update
    }, 300); // Adjust timing to match CSS transition duration
  };

  console.log(selectedLocation);

  return (
    <section className="container">
      <div className="showcaseHeading">
        <h2>
          Our Service Center <br />{" "}
          <span className="textHighlight">Showcase</span>
        </h2>
        <div className="showcaseButton">
          <button
            onClick={() => handleLocationClick("Pollachi")}
            className={
              selectedLocation === "Pollachi"
                ? "ctaPrimary active"
                : "ctaPrimary inactive"
            }
          >
            <p>Pollachi</p>
          </button>
          <button
            onClick={() => handleLocationClick("Udumalaipettai")}
            className={
              selectedLocation === "Udumalaipettai"
                ? "ctaPrimary active"
                : "ctaPrimary inactive"
            }
          >
            <p>Udumalaipettai</p>
          </button>
        </div>
      </div>
      <div className={`showcaseGallery ${isGalleryVisible ? "" : "hidden"}`}>
        {selectedLocation === "Pollachi" && (
          <>
            <Image
              src="/Showcase1.png"
              width={308}
              height={308}
              alt="Pollachi Showcase Image 1"
            />
            <Image
              src="/Showcase2.png"
              width={308}
              height={308}
              alt="Pollachi Showcase Image 2"
            />
            <Image
              src="/Showcase3.png"
              width={308}
              height={308}
              alt="Pollachi Showcase Image 3"
            />
            <Image
              src="/Showcase4.png"
              width={308}
              height={308}
              alt="Pollachi Showcase Image 3"
            />
            <Image
              src="/Showcase5.png"
              width={308}
              height={308}
              alt="Pollachi Showcase Image 3"
            />
            <Image
              src="/Showcase6.png"
              width={308}
              height={308}
              alt="Pollachi Showcase Image 3"
            />
            <Image
              src="/Showcase7.png"
              width={308}
              height={308}
              alt="Pollachi Showcase Image 3"
            />
            <Image
              src="/Showcase8.png"
              width={308}
              height={308}
              alt="Pollachi Showcase Image 3"
            />
          </>
        )}
        {selectedLocation === "Udumalaipettai" && (
          <>
            <Image
              src="/Showcase1.png"
              width={308}
              height={308}
              alt="Udumalaipettai Showcase Image 1"
            />
            <Image
              src="/Showcase2.png"
              width={308}
              height={308}
              alt="Udumalaipettai Showcase Image 1"
            />
            <Image
              src="/Showcase3.png"
              width={308}
              height={308}
              alt="Udumalaipettai Showcase Image 1"
            />
            <Image
              src="/Showcase4.png"
              width={308}
              height={308}
              alt="Udumalaipettai Showcase Image 2"
            />
            <Image
              src="/Showcase5.png"
              width={308}
              height={308}
              alt="Udumalaipettai Showcase Image 3"
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Showcase;
