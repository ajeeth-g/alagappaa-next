import "./testimonial.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonial = () => {
  return (
    <section className="testimonialSection container">
      <h2>
        What Our Valuable <br />
        <span className="textHighlight">Clients Say</span>
      </h2>
      <div className="testimonialCardContainer">
        <TestimonialCard
          name="Raj Kumar"
          review="I went for oil leak complaint for Alagappaa, they ask me to wait for a while and spot the complaint. After complete check up they gave me the Vehicle with some minor repairs done. Early I went to other service center for the same, they recommend me for engine work. 10 months passed I was comfortable with my vehicle and their service.."
        />
        <TestimonialCard
          name="Ashwanth"
          review="I visited Alagappaa due to a strange noise coming from my car's suspension. They asked me to wait while they inspected the issue. After a detailed check, they fixed a minor problem and returned my car. Earlier, another service center suggested replacing the entire suspension system. It's been 10 months now, and my car runs smoothly without any issues, thanks to their excellent service."
        />
        <TestimonialCard
          name="Basker"
          review="I went to Alagappaa because my car's air conditioning had stopped working. They asked me to wait while they diagnosed the problem. After a thorough inspection, they repaired a small fault and handed back my vehicle. Before this, another service center advised a complete AC unit replacement. Now, 10 months later, the AC works perfectly, and I'm very satisfied with their service."
        />
      </div>
    </section>
  );
};

export default Testimonial;
