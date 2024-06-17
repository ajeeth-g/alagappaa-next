import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="aboutSection container">
      <div className="aboutLeft">
        <div>
          <h2 className="aboutHeading">
            Our Reputation Tells the <br />{" "}
            <span className="textHighlight">Story</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sit et massa maecenas elit.
            Lorem ipsum dolor sit amet consectetur. Sit et massa maecenas elit.
            Lorem ipsum dolor sit amet consectetur. Sit et massa maecenas elit.
          </p>
        </div>
        <button className="ctaPrimary aboutButton">
          Know More{" "}
          <span>
            <FaArrowRightLong />
          </span>
        </button>
      </div>
      <div className="aboutRight">
        <Image
          src="/Showcase2.png"
          width={604}
          height={308}
          alt="Udumalaipettai Showcase Image 1"
          className="aboutImage"
        />
      </div>
    </section>
  );
};

export default About;
