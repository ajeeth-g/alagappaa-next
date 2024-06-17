'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './showcase.css';

const Showcase = () => {
  const [selectedLocation, setSelectedLocation] = useState('Pollachi');
  const [isGalleryVisible, setIsGalleryVisible] = useState(true);

  // Function to handle location button clicks
  const handleLocationClick = (location) => {
    setIsGalleryVisible(false); // Start hiding gallery
    setTimeout(() => {
      setSelectedLocation(location);
      setIsGalleryVisible(true); // Show gallery after state update
    }, 300); // Adjust timing to match CSS transition duration
  };

  return (
    <section className='showcaseSection container'>
      <div className='showcaseHeading'>
        <h2>
          Our Service Center <br />{' '}
          <span className='textHighlight'>Showcase</span>
        </h2>
        <div className='showcaseButton'>
          <button
            onClick={() => handleLocationClick('Pollachi')}
            className={
              selectedLocation === 'Pollachi'
                ? 'ctaPrimary active'
                : 'ctaPrimary inactive'
            }
          >
            <p>Pollachi</p>
          </button>
          <button
            onClick={() => handleLocationClick('Udumalaipettai')}
            className={
              selectedLocation === 'Udumalaipettai'
                ? 'ctaPrimary active'
                : 'ctaPrimary inactive'
            }
          >
            <p>Udumalaipettai</p>
          </button>
        </div>
      </div>
      <div className={`showcaseGallery ${isGalleryVisible ? '' : 'hidden'}`}>
        {selectedLocation === 'Pollachi' && (
          <>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <Image
                key={index}
                src={`/Showcase${index}.png`}
                width={308}
                height={308}
                alt={`Pollachi Showcase Image ${index}`}
              />
            ))}
          </>
        )}
        {selectedLocation === 'Udumalaipettai' && (
          <>
            {[1, 2, 3, 4, 5].map((index) => (
              <Image
                key={index}
                src={`/Showcase${index}.png`}
                width={308}
                height={308}
                alt={`Udumalaipettai Showcase Image ${index}`}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Showcase;
