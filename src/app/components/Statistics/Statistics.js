import Stats from "../Stats/Stats";
import "./statistics.css";

const Statistics = () => {
  return (
    <section className="statisticsSection container">
      <div className="statisticsLeft">
        <h2>
          Strength Through <br />{" "}
          <span className="textHighlight">Statistics</span>
        </h2>
        <p className="shortDesc">
          Benefit from our proven expertise and extensive network for reliable
          and top-quality Tata car service
        </p>
      </div>
      <div className="statisticsRight">
        <div className="statsGrid">
          <Stats number="50+" description="Over Automobile Industry" />
          <Stats
            number="25+"
            description="Years of Authorized Service Excellence"
          />
          <Stats number="500+" description="Active Customer" />
          <Stats number="95%" description="Customer Satisfaction Rate" />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
