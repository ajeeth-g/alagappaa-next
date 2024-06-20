import Image from 'next/image';
import './serviceCard.css';

const ServiceCard = ({ title, image }) => {
  return (
    <div className='serviceCard'>
      <Image src={image} width={308} height={400} alt='' className='serviceImage' />
      <div className='overlay'></div>
      <p className='serviceHeading'>{title}</p>
    </div>
  );
};

export default ServiceCard;
