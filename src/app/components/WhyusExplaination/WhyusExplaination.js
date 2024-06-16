import Image from "next/image";
import "./whyusExplaination.css";

const WhyusExplaination = () => {
  return (
    <div className="explanation">
      <Image
        src="/ExtendedWarranty.png"
        width={56}
        height={56}
        alt=""
        className="companyLogo"
      />
      <div>
        <h3>Extended warranty</h3>
        <p>
          Extend the benefits that you enjoy under warranty, by one or two more
          years, to protect your car for a longer duration/distance (Upto
          1,50,000 kms). The extended warranty will cover mechanical and
          electrical breakdowns in your car, and it starts immediately after
          expiry of the original warranty. We strongly recommend the purchase of
          an Extended Warranty as early as possible
        </p>
      </div>
    </div>
  );
};

export default WhyusExplaination;
