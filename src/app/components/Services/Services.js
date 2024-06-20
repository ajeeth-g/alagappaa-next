'use client';
import './services.css';
import ServiceCard from '../ServiceCard/ServiceCard';
import { useState, useEffect } from 'react';
import PaidService from '../../../../public/PaidService.jpeg';
import WarrantyRepair from '../../../../public/WarrantyRepair.jpg';
import AnnualMaintenanceContract from '../../../../public/AnnualMaintenanceContract.jpg';
import CarAccidental from '../../../../public/CarAccidental.jpg';
import FreeService from '../../../../public/FreeService.jpg';

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

  const serviceData = [
    { title: 'Free Service', image: FreeService },
    { title: 'Warranty Repair', image: WarrantyRepair },
    { title: 'Paid Service', image: PaidService },
    { title: 'Accidental Repair', image: CarAccidental },
    { title: 'Annual Maintenance Contract', image: AnnualMaintenanceContract },
    { title: 'Extended Warranty', image: WarrantyRepair },
  ];

  const visibleServices = isMobile
    ? serviceData
    : serviceData.slice(currentIndex, currentIndex + 4);

  const dots = [];
  for (let i = 0; i < Math.ceil(serviceData.length / 4); i++) {
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
        {visibleServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
          />
        ))}
      </div>
      {!isMobile && <div className='dotsContainer'>{dots}</div>}
    </section>
  );
};

export default Services;
