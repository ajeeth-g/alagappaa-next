import Image from "next/image";
import "./testimonialCard.css";

const TestimonialCard = ({ name, review }) => {
  return (
    <div className="testimonialCard">
      <div className="customerDetails">
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <Image
            src="/BannerImage.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="profile"
          />
        </div>
      </div>
      <p>{review}</p>
    </div>
  );
};

export default TestimonialCard;
