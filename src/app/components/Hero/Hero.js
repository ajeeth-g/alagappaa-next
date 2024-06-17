import Image from "next/image";
import "./hero.css";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="heroSection container">
      <div className="heroLeft">
        <div className="heroTitle">
          <h1>
            Unleash Ultimate Performance for Your <br />{" "}
            <span className="textHighlight">Tata Car</span>{" "}
          </h1>
          <p className="shortDesc">
            Experience Quality Service with Genuine Parts and Skilled
            Technicians
          </p>
        </div>
        <a href="#outlets">
          <Button text="Contact Us" />
        </a>
      </div>
      <div className="heroRight">
        <div className="imageContainer">
          <Image
            src="/CarView.png"
            width={450}
            height={450}
            alt=""
            className="carViewImage"
          />
          <Image
            src="/Buddy.png"
            width={450}
            height={450}
            alt=""
            className="buddyImage"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
