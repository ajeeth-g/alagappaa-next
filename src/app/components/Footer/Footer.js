import Image from "next/image";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="footerTop">
        <div className="companyLogos">
          <div className="company">
            <div>
              <Image
                src="/TATAMOTORS.png"
                width={250}
                height={250}
                alt=""
                className="companyLogo"
              />
            </div>
            <div>
              <Image
                src="/AlagappaEngineering.png"
                width={250}
                height={250}
                alt=""
                className="companyLogo"
              />
            </div>
          </div>
          <div>
            <Image
              src="/AlagappaBadge.png"
              width={200}
              height={141}
              alt=""
              className="companyLogo"
            />
          </div>
        </div>
        <div className="footerRight">
          <div>
            <p className="footerLinkTitle">COMPANY</p>
            <ul className="footerLinks">
              <li>
                <a href="">About Alagappa Engineering</a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="footerLinkTitle">Working Hours</p>
            <div className="footerTime">
              <p>9:00 AM- 6:00 PM</p>
              <p>
                Monday to Saturday <br />
                (Sunday Holiday)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>Copyright © 2024 Alagappa Engineering. All Rights Reserved</p>
        <ul className="footerPolicies">
          <li>
            <a href="">Terms & Conditions</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Disclaimer</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
