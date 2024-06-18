'use client';
import './services.css';
import ServiceCard from '../ServiceCard/ServiceCard';
import { useState, useEffect } from 'react';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClickDot = (index) => {
    setCurrentIndex(index);
  };

  const serviceTitles = [
    'Free Service',
    'Warranty Repair',
    'Paid Service',
    'Accidental Repair',
    'Annual Maintenance Contract',
    'Extended Warranty',
  ];

  const visibleServices = isMobile
    ? serviceTitles
    : currentIndex === 0
    ? serviceTitles.slice(0, 4)
    : serviceTitles.slice(4, 6);

  const dots = [];
  for (let i = 0; i < Math.ceil(serviceTitles.length / 4); i++) {
    dots.push(
      <span
        key={i}
        className={`dot ${currentIndex === i * 4 ? 'active' : ''}`}
        onClick={() => handleClickDot(i * 4)}
      />
    );
  }

  return (
    <section id='services' className='servicesSection container'>
      <h2>
        Our Professional <br /> <span className='textHighlight'>Services</span>
      </h2>
      <div className={`serviceCardContainer ${isMobile ? 'mobile' : ''}`}>
        {visibleServices.map((title, index) => (
          <ServiceCard key={index} title={title} />
        ))}
      </div>
      {!isMobile && <div className='dotsContainer'>{dots}</div>}
    </section>
  );
};

export default Services;
