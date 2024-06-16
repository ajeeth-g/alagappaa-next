import Image from "next/image";
import "./card.css";
import Button from "../Button/Button";

const Card = ({ title, services, time }) => {
  return (
    <section className="ContactCard">
      <div className="locationImage">
        <Image src="/bannerImage.png" width={250} height={250} alt="" />
      </div>
      <div className="ServiceCenterDetails">
        <div className="ServiceCenterName">
          <div>
            <h3>{title}</h3>
            <p className="ContactServices">{services}</p>
          </div>
          <div>
            <p>Working Hours</p>
            <p className="contactTime">{time}</p>
          </div>
        </div>
        <div className="contactButtons">
          <Button text="+91 9092155212" />
          <Button text="+91 9092155212" />
        </div>
      </div>
    </section>
  );
};

export default Card;
