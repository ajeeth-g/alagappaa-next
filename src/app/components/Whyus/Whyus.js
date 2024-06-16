import React from "react";
import "./whyus.css";
import WhyusExplaination from "../WhyusExplaination/WhyusExplaination";

const Whyus = () => {
  return (
    <section id="whyUs" className="whyUsSection container">
      <h2>
        Why We're the <br /> <span className="textHighlight">Best Choice</span>
      </h2>
      <div className="whyusContainer">
        <WhyusExplaination
          title="Extended warranty"
          description="Extend the benefits that you enjoy under warranty, by one or two more years, to protect your car for a longer duration/distance (Upto 1,50,000 kms). The extended warranty will cover mechanical and electrical breakdowns in your car, and it starts immediately after expiry of the original warranty. We strongly recommend the purchase of an Extended Warranty as early as possible"
        />
        <WhyusExplaination
          title="Value care (AMC)"
          description="Value Care (AMC) is a maintenance plan that guarantees protection against unexpected repairs & provides substantial savings through protection against inflation and price volatility of consumables. It covers all services and repairs including labour, parts & consumables."
        />
        <WhyusExplaination
          title="24 x 7 Roadside assistance"
          description="We have tied up with TVS Auto Assist (India) Limited to ensure that you get immediate and hassle free service in the event of any car breakdown. Our network for road-side assistance is spread across the length and breadth of the country and covers cities, highways and hilly terrains across India."
        />
        <WhyusExplaination
          title="Experienced and Certified Technicians"
          description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is significantly longer to provide more detailed information. It elaborates on various aspects, ensuring comprehensive coverage and a better understanding for the reader, encouraging further exploration."
        />
      </div>
    </section>
  );
};

export default Whyus;
