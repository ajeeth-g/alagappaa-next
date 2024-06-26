import "./contact.css";
import Card from "../Card/Card";
import Showcase6 from "../../../../public/Showcase6.png";
import UdumalpetServiceCenter from "../../../../public/UdumalpetServiceCenter.jpeg";

const Contact = () => {
  return (
    <section id="outlets" className="contactSection container">
      <h2>
        Need Personal Assistance? <br />{" "}
        <span className="textHighlight">Contact Us</span>
      </h2>
      <div className="serviceCenterCardContainer">
        <Card
          image={Showcase6}
          number="+919095005999"
          title="Pollachi"
          altText="Pollachi Service Center"
          services="Service & Bodyshop"
          time="9:00 AM- 6:00 PM"
          location="https://maps.app.goo.gl/fWeX9K4CZqGptt8L8"
        />
        <Card
          image={UdumalpetServiceCenter}
          number="+919698905999"
          title="Udumalaipettai"
          altText="Udumalaipettai Service Center"
          services="Service & Bodyshop"
          time="9:00 AM- 6:00 PM"
          location="https://maps.app.goo.gl/QiK9fK61gZtubK6M6 "
        />
      </div>
    </section>
  );
};

export default Contact;
