import "./contact.css"
import Card from "../Card/Card";

const Contact = () => {
  return (
    <section id="outlets" className="contactSection container">
      <h2>
        Need Personal Assistance? <br />{" "}
        <span className="textHighlight">Contact Us</span>
      </h2>
      <div className="serviceCenterCardContainer">
        <Card
          image=""
          title="Pollachi"
          altText="Pollachi Service Center"
          services="Service & Bodyshop"
          time="9:00 AM- 6:00 PM"
          location="https://maps.app.goo.gl/fWeX9K4CZqGptt8L8"
        />
        <Card
          image=""
          title="Udumalaipettai"
          altText="Udumalaipettai Service Center"
          services="Service & Bodyshop"
          time="9:00 AM- 6:00 PM"
          location="https://maps.app.goo.gl/fWeX9K4CZqGptt8L8"
        />
      </div>
    </section>
  );
};

export default Contact;
