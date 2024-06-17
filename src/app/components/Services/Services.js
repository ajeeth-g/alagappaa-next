'use client';
import './services.css';
import ServiceCard from '../ServiceCard/ServiceCard';
import { useState, useEffect } from 'react';
// import AnnualMaintenanceContract from '../../../../public/AnnualMaintenanceContract,jpg';

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
    : serviceTitles.slice(currentIndex, currentIndex + 5);

  const dots = [];
  for (let i = 0; i < Math.ceil(serviceTitles.length / 5); i++) {
    dots.push(
      <span
        key={i}
        className={`dot ${currentIndex === i * 5 ? 'active' : ''}`}
        onClick={() => handleClickDot(i * 5)}
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
