import Image from "next/image";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div>
        {" "}
        <Image
          src="/TATAMOTORS.png"
          width={250}
          height={250}
          alt=""
          className="companyLogo"
        />
      </div>
      <nav>
        <ul className="navList">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#whyUs">Why Us</a>
          </li>
          <li>
            <a href="#outlets">Outlets</a>
          </li>
          <li>
            <button>Make an Appointment</button>
          </li>
        </ul>
      </nav>
      <div><Image
          src="/AlagappaEngineering.png"
          width={250}
          height={250}
          alt=""
          className="companyLogo"
        /></div>
    </header>
  );
};

export default Header;
