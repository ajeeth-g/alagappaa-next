'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IoMenu } from 'react-icons/io5';
import './header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <header className='header'>
      <div className='logoContainer'>
        <a href='#'>
          <Image
            src='/TATAMOTORS.png'
            width={250}
            height={250}
            alt=''
            className='companyLogo tataLogo'
          />
        </a>
      </div>
      <nav className={mobileMenuOpen ? 'navActive' : ''}>
        <ul className='navList'>
          <li>
            <a href='#about' onClick={handleNavLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href='#services' onClick={handleNavLinkClick}>
              Services
            </a>
          </li>
          <li>
            <a href='#whyUs' onClick={handleNavLinkClick}>
              Why Us
            </a>
          </li>
          <li>
            <a href='#outlets' onClick={handleNavLinkClick}>
              Outlets
            </a>
          </li>
          <li>
            <a href='#outlets' onClick={handleNavLinkClick}>
              <button className='buttonInverse'>Make an Appointment</button>
            </a>
          </li>
        </ul>
      </nav>
      <div className='mobileMenuToggle' onClick={toggleMobileMenu}>
        <IoMenu />
      </div>
      <div className='logoContainer'>
        <a href='#'>
          <Image
            src='/AlagappaEngineering.png'
            width={250}
            height={250}
            alt=''
            className='companyLogo'
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
