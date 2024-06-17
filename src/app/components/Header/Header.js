"use client";

import { useState } from "react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import "./header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logoContainer">
        <Image
          src="/TATAMOTORS.png"
          width={250}
          height={250}
          alt=""
          className="companyLogo"
        />
      </div>
      <nav className={mobileMenuOpen ? "navActive" : ""}>
        <div className="mobileMenuToggle" onClick={toggleMobileMenu}>
          <IoMenu />
        </div>
        <ul className="navList">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#whyUs">Why Us</a>
          </li>
          <li>
            <a href="#outlets">Outlets</a>
          </li>
          <li>
            <a href="#outlets">
              <button className="buttonInverse">Make an Appointment</button>
            </a>
          </li>
        </ul>
      </nav>
      <div className="logoContainer">
        <Image
          src="/AlagappaEngineering.png"
          width={250}
          height={250}
          alt=""
          className="companyLogo"
        />
      </div>
    </header>
  );
};

export default Header;
