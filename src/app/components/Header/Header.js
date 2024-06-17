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
        <ul className='navList' onClick={toggleMobileMenu}>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#whyUs'>Why Us</a>
          </li>
          <li>
            <a href='#outlets'>Outlets</a>
          </li>
          <li>
            <a href='#outlets'>
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
          {' '}
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
