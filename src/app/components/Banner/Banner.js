import Image from "next/image";
import "./banner.css";

const Banner = () => {
  return (
    <section className="bannerSection container">
      <div className="bannerImage">
        <Image
          src="/BannerImage.png"
          width={800}
          height={500}
          alt=""
          layout="responsive"
        />
        <div className="bannerContent">
          <div className="bannerContentText">
            <h2>
              Ready to Schedule <br /> an Appointment?
            </h2>
            <p className="shortDesc">
              Contact us today to book your next service
            </p>
          </div>
          <a href="#outlets">
            <button className="ctaPrimary bannerButton">
              Make an Appointment
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
