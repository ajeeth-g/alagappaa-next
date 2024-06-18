import Image from 'next/image';
import './serviceCard.css';

const ServiceCard = ({ title }) => {
  return (
    <div className='serviceCard'>
      <Image src='/CarView.png' width={308} height={400} alt='' />
      <p className='serviceHeading'>{title}</p>
    </div>
  );
};

export default ServiceCard;
