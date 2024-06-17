import "./testimonialCard.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const TestimonialCard = ({ name, review }) => {
  return (
    <div className="testimonialCard">
      <div className="customerDetails">
        <div className="testimonialName">
          <h3>{name}</h3>
          <div className="starIcons">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
        </div>
      </div>
      <p>{review}</p>
    </div>
  );
};

export default TestimonialCard;
