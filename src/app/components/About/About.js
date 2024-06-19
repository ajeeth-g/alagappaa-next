import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import './about.css';

const About = () => {
  return (
    <section id='about' className='aboutSection container'>
      <div className='aboutLeft'>
        <div>
          <h2 className='aboutHeading'>
            Our Reputation Tells the <br />{' '}
            <span className='textHighlight'>Story</span>
          </h2>
          <p>
            Alagappaa Engineering, a trusted name in the industry for over 60
            years, is a Tata-authorized service center. Renowned for its
            expertise and reliability, Alagappaa Engineering has been providing
            exceptional service and maintenance solutions, ensuring customer
            satisfaction and vehicle performance for decades. With a commitment
            to quality and innovation, they continue to set the standard in
            automotive service. Their experienced team and state-of-the-art
            facilities guarantee the highest level of care for every vehicle.
          </p>
        </div>
        <button className='ctaPrimary aboutButton'>
          Know More{' '}
          <span>
            <FaArrowRightLong />
          </span>
        </button>
      </div>
      <div className='aboutRight'>
        <Image
          src='/about.webp'
          width={704}
          height={380}
          alt='Udumalaipettai Showcase Image 1'
          className='aboutImage'
        />
      </div>
    </section>
  );
};

export default About;
