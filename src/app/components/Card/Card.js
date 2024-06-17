import Image from 'next/image';
import './card.css';
import { IoCall } from 'react-icons/io5';
import { FaLocationArrow } from 'react-icons/fa';

const Card = ({ image, title, services, number, location, time }) => {
  return (
    <section className='ContactCard'>
      <div className='locationImage'>
        <Image src={image} width={250} height={250} alt='' />
      </div>
      <div className='ServiceCenterDetails'>
        <div className='ServiceCenterName'>
          <div>
            <h3>{title}</h3>
            <p className='ContactServices'>{services}</p>
          </div>
          <div>
            <p>Working Hours</p>
            <p className='contactTime'>{time}</p>
          </div>
        </div>
        <div className='contactButtons'>
          <a href='tel:+91 909215512'>
            <button className='ctaPrimary contactButton'>
              <span className='contactIcon'>
                <IoCall />
              </span>{' '}
              {number}
            </button>
          </a>
          <a href={location} target='_blank'>
            <button className='ctaPrimary contactButton'>
              <span className='contactIcon'>
                <FaLocationArrow />
              </span>
              Get Direction
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card;
